import Discount from './Discount'
import plat from '../assets/plat.png'
import remove from '../assets/delete.svg'
function Orders() {
  return (
    <>
      <aside className="order-content">
        <h1>Order</h1>
        <h3>Discount</h3>
        <Discount />
        <div className="div1000">
          <div className="div-200">
            <div className="div-300">
              <div className="div-400">
                <img loading="lazy" src={plat} className="img00" />
                <div className="div-500">
                  <div className="div-600">Quattro</div>
                  <div className="div-700">$ 2.29</div>
                </div>
              </div>
              <div className="div-800">
                <div className="div-900">2</div>
                <div className="div-10000">$ 4,58</div>
              </div>
            </div>
            <div className="div-1100">
              <div className="div-1200">No Salade</div>
              <div className="div-1300">
                <img loading="lazy" src={remove} className="img-200" />
              </div>
            </div>
          </div>
          <div className="div-1400" />
        </div>
      </aside>
    </>
  )
}

export default Orders
