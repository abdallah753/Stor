import React, { useState } from 'react'
import Cart from './components/cart'
import { Context } from './components/currncy'
import Products from './components/Products'
import data from './components/data.json'
export default function App() {
  let [total , settotal] = useState(0)
  let [cart , setcart] = useState([])
    let handelclick = (id , price , count , add , delet ) => {
      settotal(total + (price * count)) 
      add && data.filter((ele) => ele.id === id).map((e)=> setcart([...cart , e]))
      delet && setcart(cart.filter((ele) => ele.id !== id))
      }
  return (
    <Context.Provider value={handelclick} >
      <div className='container'>
        <div className='d-flex justify-content-between pt-1'>
          <h1>Stor</h1>
        {cart.length !== 0 ? <Cart total={total} cart={cart} />: ''}
        </div>
        <hr />
        <Products />
      </div>
    </Context.Provider>
  )
}
