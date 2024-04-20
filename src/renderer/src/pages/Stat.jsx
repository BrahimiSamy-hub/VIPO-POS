import Navbar from '../components/Navbar'
import Date from '../components/DateHeader'
import coin from '../assets/Coin.svg'
import orange from '../assets/orangeStat.svg'
import Customer from '../assets/Vector.svg'
import up from '../assets/up.svg'
import down from '../assets/down.svg'

const Stat = () => {
  return (
    <>
      <section className="dashboard-container ">
        <Navbar></Navbar>
        <div className="main-content">
          <h1>Statisqtique</h1>
          <Date />

          <hr style={{ margin: '20px 0px' }} />
          <div className="stat-wrapper">
            <div className="stat">
              <div className="stat-card">
                <div className="icon-container">
                  <img loading="lazy" src={coin} className="img-stat" />
                </div>
                <div className="pourcentage">
                  <span className="up">+32.40%</span>
                  <img loading="lazy" src={up} className="pourcentage-icon" />
                </div>
              </div>
              <div className="text-stat">1,100,243 DA</div>
              <div className="small-text">Total Revenue</div>
            </div>
            <div className="stat">
              <div className="stat-card">
                <div className="icon-container">
                  <img loading="lazy" src={orange} className="img-stat" />
                </div>
                <div className="pourcentage">
                  <span className="down">-12.40%</span>
                  <img loading="lazy" src={down} className="pourcentage-icon" />
                </div>
              </div>

              <div className="text-stat">23,456</div>
              <div className="small-text">Total Orders</div>
            </div>
            <div className="stat">
              <div className="stat-card">
                <div className="icon-container">
                  <img loading="lazy" src={Customer} className="img-stat" />
                </div>
                <div className="pourcentage">
                  <span className="up">+2.40%</span>
                  <img loading="lazy" src={up} className="pourcentage-icon" />
                </div>
              </div>
              <div className="text-stat">1,234</div>
              <div className="small-text">Total Customer</div>
            </div>
          </div>
          <div className="stat-container" style={{ marginTop: '24px' }}>
            <h1>orders</h1>
          </div>
        </div>
        <aside
          className="order-content"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div className="stat-container">
            <h2> Most Ordered</h2>
          </div>
          <div className="stat-container">
            <h2>Most Type of Order</h2>
          </div>
        </aside>
      </section>
    </>
  )
}

export default Stat
