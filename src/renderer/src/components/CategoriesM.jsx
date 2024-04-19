import Categories from './Categories'
import add from '../assets/add.svg'
function CategoriesM() {
  return (
    <div className="">
      <h1>Categories Management</h1>
      {/* <Categories /> */}
      <hr />
      <button type="button" className="add-button">
        <section className="card">
          <div className="card-content">
            <div className="image-container">
              <img loading="lazy" src={add} alt="Add new dish" className="icon" draggable="false" />
            </div>
            Add new Category
          </div>
        </section>
      </button>
    </div>
  )
}

export default CategoriesM
