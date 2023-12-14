import React from 'react'
import './Popular.css'
import all_product from '../Assets/AllProduct'
import Item from '../Item/Item'

const Popular = () => {
    // console.log(all_product)
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.title} image={item.image} />
            })}
           
        </div>
    </div>
  )
}

export default Popular;
