// import { Link } from 'react-router-dom'
// import table from '../assets/table2.svg'
// import tableRed from '../assets/table3.svg'
// import tableOrange from '../assets/table4.svg'
// function Table() {
//   return (
//     <div className="table-grid">
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T1</h3>
//           <img className="hover" src={table} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T2</h3>
//           <img className="hover" src={tableRed} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T3</h3>
//           <img className="hover" src={tableOrange} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T4</h3>
//           <img className="hover" src={table} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T5</h3>
//           <img className="hover" src={tableRed} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       {/* Repeat the pattern for all other table entries */}
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T6</h3>
//           <img className="hover" src={tableRed} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T7</h3>
//           <img className="hover" src={tableRed} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T8</h3>
//           <img className="hover" src={tableOrange} alt="Table" draggable="false" />
//         </div>
//       </Link>
//       <Link to="/Menu">
//         <div>
//           <h3 className="table-text">T9</h3>
//           <img className="hover" src={tableOrange} alt="Table" draggable="false" />
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default Table

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import table from '../assets/table2.svg'
import tableRed from '../assets/table3.svg'
import tableOrange from '../assets/table4.svg'

function Table() {
  // Initial table configurations
  const initialTables = [
    { id: 1, img: table, label: 'T1' },
    { id: 2, img: tableRed, label: 'T2' },
    { id: 3, img: tableOrange, label: 'T3' },
    { id: 4, img: table, label: 'T4' },
    { id: 5, img: tableRed, label: 'T5' },
    { id: 6, img: tableOrange, label: 'T6' },
    { id: 7, img: tableRed, label: 'T7' },
    { id: 8, img: tableRed, label: 'T8' },
    { id: 9, img: tableOrange, label: 'T9' },
    { id: 10, img: table, label: 'T10' },
    { id: 11, img: table, label: 'T11' },
    { id: 12, img: tableRed, label: 'T12' }
  ]

  const [tableOrder, setTableOrder] = useState(() => {
    const savedOrder = localStorage.getItem('tableOrder')
    return savedOrder ? JSON.parse(savedOrder) : initialTables.map((table) => table.id)
  })

  // Save order to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('tableOrder', JSON.stringify(tableOrder))
  }, [tableOrder])

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (e, dropIndex) => {
    const draggedId = parseInt(e.dataTransfer.getData('id'))
    const newOrder = [...tableOrder]
    const draggedIndex = newOrder.findIndex((id) => id === draggedId)
    if (draggedIndex !== dropIndex) {
      newOrder.splice(draggedIndex, 1) // Remove the item from its original position
      newOrder.splice(dropIndex, 0, draggedId) // Insert it at the new position
      setTableOrder(newOrder) // Update the state with the new order
    }
  }

  return (
    <div className="table-grid">
      {tableOrder.map((tableId, index) => {
        const table = initialTables.find((t) => t.id === tableId)
        return (
          <Link to="/Menu" key={table.id}>
            <div
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index)}
              draggable="true"
              onDragStart={(e) => onDragStart(e, table.id)}
            >
              <h3 className="table-text">{table.label}</h3>
              <img className="hover" src={table.img} alt="Table" draggable="true" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Table
