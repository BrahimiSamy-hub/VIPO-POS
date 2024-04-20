import Categories from './Categories'
import add from '../assets/add.svg'
function DeliveyM() {
  return (
    <div className="">
      <h1>Delivey Management</h1>
      {/* <Categories /> */}
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
              Add new Delivey
            </div>
          </section>
        </button>
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
              Add new Delivey
            </div>
          </section>
        </button>
      </div>
    </div>
  )
}

export default DeliveyM
