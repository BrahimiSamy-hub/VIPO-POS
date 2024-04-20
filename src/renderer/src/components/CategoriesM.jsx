import { useState } from 'react'
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('jwt')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await axios.post('http://localhost:3000/categories', { name }, { headers })
      setOpen(false)
    } catch (error) {
      console.error('Category addition failed', error.response || error)
    }
  }

  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="">
      <h1>Categories Management</h1>
      <hr style={{ margin: '20px 0px' }} />
      <button onClick={handleOpen} type="button" className="add-button">
        <section className="card">
          <div className="card-content">
            <div className="image-container">
              <img loading="lazy" src={add} alt="Add new dish" className="icon" draggable="false" />
            </div>
            Add New Category
          </div>
        </section>
      </button>
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
    </div>
  )
}

export default CategoriesM
