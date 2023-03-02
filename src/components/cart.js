import React from 'react'


export default function Cart({total , cart}) {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Cart
  </button>
  <ul className="dropdown-menu">
    {cart.map((ele) => { return(
      <div key={Math.random() * 10} className='row m-0' style={{width:'300px'}}>
        <div className='col-8'><img src={ele.imgUrl} alt='imge'/>
        </div>
        <div className='col-4'>
          <h4>{ele.name}</h4>
        <p className='pt-1 m-0'>{ele.price}</p>
        </div>
        <hr className='mt-1' />
      </div>
    )})}
    <li>Total: {total}</li>
  </ul>
</div>
  )
}
