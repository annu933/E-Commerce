import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo, distinctio quasi beatae iusto consequatur, quas sunt optio alias dolor quidem excepturi provident repellat est nisi officiis ipsum tempora doloremque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo, </p>
        </div>
    </div>
  )
}
