import { useState, useEffect } from 'react'
import add from '../assets/add.svg'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import axios from 'axios'
import edit from '../assets/Edit.svg'
import remove from '../assets/delete.svg'
import Taco from '../assets/taco.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#393c49',
  boxShadow: 24,
  border: '2px dashed #ea7c69',
  borderRadius: '8px',
  p: 4
}

function CategoriesM() {
  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const handleOpen = () => {
    setName('')
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const fetchData = async () => {
    const token = localStorage.getItem('jwt')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await axios.get('http://localhost:3000/categories', { headers })
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('jwt')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await axios.post('http://localhost:3000/categories', { name }, { headers })
      setOpen(false)
      fetchData()
    } catch (error) {
      console.error('Category addition failed', error.response || error)
    }
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem('jwt')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      await axios.delete(`http://localhost:3000/categories/${id}`, { headers })
      const newCategories = categories.filter((category) => category._id !== id)
      setCategories(newCategories)
    } catch (error) {
      console.error('Failed to delete category', error.response || error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="">
      <h1>Categories Management</h1>
      <hr style={{ margin: '20px 0px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6 , 1fr)', gap: '10px' }}>
        <button onClick={handleOpen} type="button" className="add-button">
          <section className="add-category">
            <div className="card-content">
              <div className="image-container">
                <img
                  loading="lazy"
                  src={add}
                  alt="Add new dish"
                  className="icon"
                  draggable="false"
                />
              </div>
              Add New Category
            </div>
          </section>
        </button>
        {categories.map((category) => (
          <div key={category._id} className="category-card ">
            <h1>{category.name}</h1>
            <img
              loading="lazy"
              src={Taco}
              alt="Add new dish"
              style={{ width: '30px' }}
              draggable="false"
            />
            <div style={{ display: 'flex', minWidth: '100%' }}>
              <span className="div-8" style={{ minWidth: '50%', fontWeight: 'bold' }}>
                <img src={edit} alt="" />
              </span>
              <span
                onClick={() => handleDelete(category._id)}
                className="div-10"
                style={{ minWidth: '50%', fontWeight: 'bold' }}
              >
                <img src={remove} alt="" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: 'center' }}
            >
              Add New Category
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </Box>
      </Modal>
    </section>
  )
}

export default CategoriesM
