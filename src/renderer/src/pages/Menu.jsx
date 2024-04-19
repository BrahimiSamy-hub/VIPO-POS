import Navbar from '../components/Navbar'
import Name from '../components/Name'
import Categories from '../components/Categories'
import Plat from '../components/Plat'
import Orders from '../components/Orders'
const Menu = () => {
  return (
    <>
      <div className="dashboard-container">
        <Navbar></Navbar>
        <div className="main-content">
          <Name></Name>
          <Categories></Categories>
          <hr />
          <h1>Menu</h1>
          <Plat />
        </div>
        <div className="orders-container">
          <Orders />
        </div>
      </div>
    </>
  )
}

export default Menu
