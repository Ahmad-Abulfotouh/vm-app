import {useContext} from 'react'
import AppContext from "../context/AppContext"

// components
import Product from '../components/Product'

// icons
import { AiFillCaretDown } from 'react-icons/ai'

function Home() {
  const {products} = useContext(AppContext)

  return (
    <>
      <div className="machine">
        <p>machine: <span>BUC machine <AiFillCaretDown /></span></p>
      </div>
      <div className="products-filter">
        <div className="filter-item filter-item-active">salty</div>
        <div className="filter-item">sweet</div>
      </div>
      {
        products.map((p) => (
          <Product key={p.id} title={p.title} price={p.price} pID={p.id} imgUrl={p.imgUrl} />
        ))
      }
    </>
  )
}

export default Home