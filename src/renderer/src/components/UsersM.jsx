import { MdMargin } from 'react-icons/md'
import add from '../assets/add.svg'
function UsersM() {
  return (
    <div className="">
      <h1>Users Management</h1>
      <hr style={{ margin: '20px 0px' }} />
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
              Add new User
            </div>
          </section>
        </button>
      </div>
    </div>
  )
}

export default UsersM
