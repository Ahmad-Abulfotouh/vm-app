import {useContext} from 'react'
import AppContext from "../context/AppContext"

function OrderList() {
  const {orderList, totalOrderPrice} = useContext(AppContext)

  return (
      <div className="order-list">
        <h2>order list</h2>
        <div className="list">
          {
            orderList.length ? orderList.map((p) => (
              <div className='item' key={p.orderId}>
                - {p.title}
              </div>
            )) : 'add some thing!'
          }
        </div>
        <p className="price">
          total: {totalOrderPrice}
          <span> L.E</span>
        </p>
      </div>
  )
}

export default OrderList