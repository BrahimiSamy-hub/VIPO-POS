import Navbar from '../components/Navbar'
import Salles from '../components/Salles'
import Table from '../components/Table'
import Name from '../components/Name'
import Orders from '../components/Orders'
import { useState } from 'react'

const Tables = () => {
  const [selectedSale, setSelectedSale] = useState('1er')

  return (
    <>
      <div className="dashboard-container">
        <Navbar></Navbar>
        <div className="table-content">
          <Name></Name>
          <Salles setSelectedSale={setSelectedSale} /> {/* Pass handler to Salles */}
          <hr />
          <Table selectedSale={selectedSale} />
        </div>
        {/* <div className="orders-container">
          <Orders />
        </div> */}
      </div>
    </>
  )
}

export default Tables
