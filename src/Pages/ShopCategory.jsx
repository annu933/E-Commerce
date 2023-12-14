import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/Context'
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="shop banner"/>
      <div className="shopcategory-indexShot">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-shot">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          // console.log("inside map function item",item);
          if(props.category === item.category){
            console.log("item",item);
            return <Item key={i} id={item.id} name={item.title} image={item.image} />
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategory;