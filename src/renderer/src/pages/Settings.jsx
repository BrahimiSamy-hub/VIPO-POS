import { useState } from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/ProductM'
import Categories from '../components/CategoriesM'
import Tables from '../components/TablesM'
import Salles from '../components/SallesM'
import Table from '../assets/table10.svg'
import Food from '../assets/fastfood.svg'
import Category from '../assets/category.svg'
import Delivery from '../assets/delivery.svg'
import Person from '../assets/person.svg'

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
                <img draggable="false" src={Table} alt="Salles Icon" className="feature-icon" />
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
                <img
                  draggable="false"
                  src={Table}
                  alt="Tables Management Icon"
                  className="feature-icon"
                />
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
                <img
                  draggable="false"
                  src={Category}
                  alt="Categories Management Icon"
                  className="feature-icon"
                />
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
                <img
                  draggable="false"
                  src={Food}
                  alt="Product Management Icon"
                  className="feature-icon"
                />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'products' ? 'active' : ''}`}>
                    Product Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('products')}>
              <li className={`feature-item ${activeComponent === 'products' ? 'special' : ''}`}>
                <img
                  draggable="false"
                  src={Person}
                  alt="Product Management Icon"
                  className="feature-icon"
                />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'products' ? 'active' : ''}`}>
                    Personal Management
                  </h3>
                  <p className="feature-paragraphe">Manage your product, pricing, etc</p>
                </div>
              </li>
            </a>
            <a onClick={() => handleNavClick('products')}>
              <li className={`feature-item ${activeComponent === 'products' ? 'special' : ''}`}>
                <img
                  draggable="false"
                  src={Delivery}
                  alt="Product Management Icon"
                  className="feature-icon"
                />
                <div className="feature-content">
                  <h3 className={`feature-title ${activeComponent === 'products' ? 'active' : ''}`}>
                    Livreur Management
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
        </aside>
      </div>
    </>
  )
}

export default Setting
