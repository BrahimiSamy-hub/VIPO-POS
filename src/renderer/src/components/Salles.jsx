import { useState } from 'react'

function Salles({ setSelectedSale }) {
  const salles = [
    { id: 1, name: 'Salle 1' },
    { id: 2, name: 'Salle 2' },
    { id: 3, name: 'Salle 3' }
  ]

  const [selectedSale, setSelectedSaleInternal] = useState('Salle 1')

  const handleSaleClick = (salle) => {
    setSelectedSaleInternal(salle)
    setSelectedSale(salle)
  }

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
      {salles.map((salle) => (
        <li
          key={salle.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleSaleClick(salle.name)}
        >
          <div className={`chip ${selectedSale === salle.name ? 'chip-selected' : ''}`}>
            {salle.name}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Salles
