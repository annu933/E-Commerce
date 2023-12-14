import React from 'react'
import './NewCollection.css'
import AllProduct from '../Assets/AllProduct'
import Item from '../Item/Item'
import axios from "axios";

const NewCollection = () => {

    // axios({
    //     url: "",
    //     method:"POST",
    // })
  return (
    <div className='new-collection'>
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
            {AllProduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.title} image={item.image} />
            })}
        </div>
    </div>
  )
}
export default NewCollection;
