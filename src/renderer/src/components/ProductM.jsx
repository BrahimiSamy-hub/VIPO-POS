import Categories from './Categories'
import add from '../assets/add.svg'
import edit from '../assets/Edit.svg'
import Plat from '../assets/plat.png'
function ProdudctM() {
  return (
    <div className="">
      <h1>Products Management</h1>
      <Categories />
      <hr />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '10px'
        }}
      >
        <button type="button" className="add-button">
          <section className="card">
            <div className="card-content">
              <div className="image-container">
                <img
                  loading="lazy"
                  src={add}
                  alt="Add new dish"
                  className="icon"
                  draggable="false"
                />
              </div>
              Add new dish
            </div>
          </section>
        </button>
        <div className="div">
          <div className="div-2">
            <img loading="lazy" src={Plat} className="img" />
            <div className="div-3">
              <h4 className="">Spicy seasoned seafood noodles</h4>
              <div className="">700 DA</div>
            </div>
            <but className="div-8">
              <img loading="lazy" src={edit} className="" />
              <span className="" style={{ minWidth: '100%' }}>
                Edit dish
              </span>
            </but>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdudctM
