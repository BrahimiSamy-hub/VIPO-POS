import { useState } from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/ProductM'
import Categories from '../components/CategoriesM'
import Tables from '../components/TablesM'
import Salles from '../components/SallesM'
import Users from '../components/UsersM'
import Delivery from '../components/DeliveryM'
import Caisse from '../components/CaisseM'
import Stock from '../components/StockM'
import { FaCashRegister } from 'react-icons/fa'
import {
  MdTableRestaurant,
  MdMeetingRoom,
  MdDeliveryDining,
  MdOutlineInventory,
  MdFastfood,
  MdCategory
} from 'react-icons/md'
import { GoPersonFill } from 'react-icons/go'
const Setting = () => {
  const [activeComponent, setActiveComponent] = useState('salles')
  const handleNavClick = (componentName) => {
    setActiveComponent(componentName)
  }
  return (
    <>
      <div className="dashboard-container">
        <Navbar></Navbar>

        <nav style={{ padding: '24px' }}>
          <h1>Settings</h1>
          <ul className="feature-list">
            <a onClick={() => handleNavClick('salles')}>
              <li className={`feature-item ${activeComponent === 'salles' ? 'special' : ''}`}>
                <MdMeetingRoom size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'salles' ? 'active' : ''}`}>
                    Salles Management
                  </h3>
                  <p className="feature-paragraphe">Manage your salles</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('tables')}>
              <li className={`feature-item ${activeComponent === 'tables' ? 'special' : ''}`}>
                <MdTableRestaurant size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'tables' ? 'active' : ''}`}>
                    Tables Management
                  </h3>
                  <p className="feature-paragraphe">Manage your tables</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('categories')}>
              <li className={`feature-item ${activeComponent === 'categories' ? 'special' : ''}`}>
                <MdCategory size={25} />
                <div className="feature-content">
                  <h3
                    className={`feature-title ${activeComponent === 'categories' ? 'active' : ''}`}
                  >
                    Categories Management
                  </h3>
                  <p className="feature-paragraphe">Manage your categories names</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('products')}>
              <li className={`feature-item ${activeComponent === 'products' ? 'special' : ''}`}>
                <MdFastfood size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'products' ? 'active' : ''}`}>
                    Product Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('users')}>
              <li className={`feature-item ${activeComponent === 'users' ? 'special' : ''}`}>
                <GoPersonFill size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'users' ? 'active' : ''}`}>
                    Personal Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('delivery')}>
              <li className={`feature-item ${activeComponent === 'delivery' ? 'special' : ''}`}>
                <MdDeliveryDining size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'delivery' ? 'active' : ''}`}>
                    Livreur Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('stock')}>
              <li className={`feature-item ${activeComponent === 'stock' ? 'special' : ''}`}>
                <MdOutlineInventory size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'stock' ? 'active' : ''}`}>
                    Stock Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('caisse')}>
              <li className={`feature-item ${activeComponent === 'caisse' ? 'special' : ''}`}>
                <FaCashRegister size={25} />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'caisse' ? 'active' : ''}`}>
                    Caisse Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
          </ul>
        </nav>
        <aside className="aside-list">
          {activeComponent === 'products' && <Product />}
          {activeComponent === 'categories' && <Categories />}
          {activeComponent === 'salles' && <Salles />}
          {activeComponent === 'tables' && <Tables />}
          {activeComponent === 'users' && <Users />}
          {activeComponent === 'delivery' && <Delivery />}
          {activeComponent === 'stock' && <Stock />}
          {activeComponent === 'caisse' && <Caisse />}
        </aside>
      </div>
    </>
  )
}

export default Setting
