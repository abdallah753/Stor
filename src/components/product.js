import React, { useContext, useState } from 'react'
import formatCurrency, { Context } from './currncy'

export default function Product({ele}) {
    let [count , setcount] = useState(0)

  let handelclick = useContext(Context)
  return (
    <div key={ele.id} className='col-lg-3 mb-3 me-3 col-md-5 col-sm-8 col-12 card'>
      <img src={ele.imgUrl} alt='imge' />
      <div className='card-body'>
          <h3>{ele.name}</h3>
          <p>price: {formatCurrency(ele.price)}</p>
          <div className={`w-100 d-flex justify-content-around mb-1 ${count === 0 && 'd-none'}` }><button style={{padding: '0 14px'}} className='btn btn-danger' onClick={() => { count  === 1 ? handelclick(ele.id , -ele.price , 1 , false , true) : handelclick(ele.id , -ele.price , 1 , false , false) ;setcount(count - 1) ;}}>-</button><span className='font-bold pt-1'>{count}</span><button className=' btn btn-success' onClick={() => {handelclick(ele.id , ele.price , 1 , false , false);setcount(count + 1)}}>+</button></div>
          <button className={`btn btn-primary w-100 ${count !== 0 && 'd-none'}` } onClick={() => {setcount(count + 1);handelclick(ele.id , ele.price , 1 , true , false)}}>Add To Cart</button>
          <button className={`btn btn-primary w-100 ${count === 0 && 'd-none'}` } onClick={() => {handelclick(ele.id , -ele.price , count , false , true); setcount(0)}}> Delete</button>
      </div>
    </div>
  )
}