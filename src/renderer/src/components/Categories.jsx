import { useState } from 'react'
import Taco from '../assets/taco.svg'
import Soda from '../assets/soda.svg'
import Popcorn from '../assets/popcorn.svg'
import Hotdog from '../assets/hotdog.svg'

function Categories() {
  const categories = [
    { id: 1, name: 'Hot Dishes', icon: Hotdog },
    { id: 2, name: 'Cold Dishes', icon: Popcorn },
    { id: 3, name: 'Soup', icon: Soda },
    { id: 4, name: 'Grill', icon: Soda },
    { id: 5, name: 'Appetizer', icon: Taco }
    // { id: 6, name: 'Dessert', icon: Popcorn }
    // { id: 7, name: 'Dessert', icon: Popcorn },
    // { id: 8, name: 'Dessert', icon: Popcorn },
    // { id: 9, name: 'Dessert', icon: Popcorn }
  ]

  const [selectedSale, setSelectedSaleInternal] = useState('Hot Dishes')
  const handleSaleClick = (salle) => {
    setSelectedSaleInternal(salle)
  }
  return (
    <ul style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
      {categories.map((category) => (
        <li
          key={category.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleSaleClick(category.name)}
        >
          <div
            className={`chip icon-category ${selectedSale === category.name ? 'chip-selected' : ''}`}
          >
            <img
              src={category.icon}
              alt={category.name}
              style={{ width: '35px', paddingRight: '10px' }}
            />
            <h4>{category.name}</h4>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Categories
