import { useState, useEffect } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Salles({ setSelectedSale }) {
  const [rooms, setRooms] = useState([])
  const [selectedSale, setSelectedSaleInternal] = useState('Salle 1')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('jwt')
      const headers = {
        Authorization: `Bearer ${token}`
      }
      setIsLoading(true)
      const response = await axios.get('http://localhost:3000/rooms', { headers })
      setRooms(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(true)
    }
  }

  const handleSaleClick = (salle) => {
    setSelectedSaleInternal(salle)
    setSelectedSale(salle)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ul style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
      {/* <li style={{ cursor: 'pointer' }} onClick={() => handleSaleClick('Salle 1')}>
        <div className={`chip ${selectedSale === 'Salle 1' ? 'chip-selected' : ''}`}>Salle 1</div>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={() => handleSaleClick('Salle 2')}>
        <div className={`chip ${selectedSale === 'Salle 2' ? 'chip-selected' : ''}`}>Salle 2</div>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={() => handleSaleClick('Salle 3')}>
        <div className={`chip ${selectedSale === 'Salle 3' ? 'chip-selected' : ''}`}>Salle 3</div>
      </li> */}
      {rooms.map((salle) => (
        <li
          key={salle._id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleSaleClick(salle.name)}
        >
          <div className={`chip ${selectedSale === salle.name ? 'chip-selected' : ''}`}>
            {isLoading ? (
              <h4>
                <CircularProgress
                  sx={{
                    color: '#ea7c69'
                  }}
                />
              </h4>
            ) : (
              <h4>{salle.name}</h4>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Salles
