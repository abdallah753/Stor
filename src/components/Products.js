import React, { Fragment } from 'react'
import data from './data.json'
import Product from './product'

export default function Products() {
  return (
    <>
      <div className='row m-0 justify-content-around'>
        {data.map((ele) => {
          return (
            <Fragment key = {ele.id}>
              <Product ele={ele} />
            </Fragment>)
        }
      )
    }
    </div>
    </>
  )
}
