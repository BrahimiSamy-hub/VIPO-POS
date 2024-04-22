import { useState, useEffect } from 'react'
import axios from 'axios'
import Taco from '../assets/taco.svg'
import Soda from '../assets/soda.svg'
import Popcorn from '../assets/popcorn.svg'
import Hotdog from '../assets/hotdog.svg'
import CircularProgress from '@mui/material/CircularProgress'

function Categories() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategoryInternal] = useState('Burger')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const token = localStorage.getItem('jwt')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      setIsLoading(true)
      const response = await axios.get('http://localhost:3000/categories', { headers })
      setCategories(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(true)
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategoryInternal(category)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const skeletonItems = [1, 2, 3, 4, 5].map((id) => ({
    id
  }))

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8,1fr)',
        columnGap: '10px',
        marginTop: '24px'
      }}
    >
      {(isLoading ? skeletonItems : categories).map((category) => (
        <li
          key={category._id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleCategoryClick(category.name)}
        >
          <div
            className={`chip icon-category ${selectedCategory === category.name && !isLoading ? 'chip-selected' : ''}`}
          >
            {/* <img
              src={category.icon}
              alt={category.name || 'Loading...'}
              style={{ width: '35px', paddingRight: '10px', opacity: isLoading ? 0.5 : 1 }}
            /> */}
            {isLoading ? (
              <h4>
                <CircularProgress
                  sx={{
                    color: '#ea7c69'
                  }}
                />
              </h4>
            ) : (
              <h4 style={{ textTransform: 'capitalize' }}>{category.name}</h4>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Categories
