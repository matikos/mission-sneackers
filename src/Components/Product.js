import React from 'react';
import '../SASS/Product.scss'
function Product(props) {
  console.log(props);
    return (
      <div className="Product">
        <div className={`color-code ${props.details.status}`}></div>
        <div className="Shoe">
          <img src={props.details.image} alt="Product" />
          <div className="shoeName">
            <p>{props.details.brand}</p>
            <p>{props.details.line}</p>
            <p>{props.details.model}</p>
          </div>
        </div>
        <div className="Category">
          <p>Category:<br></br>{props.details.category}</p>
        </div>
        <div className="Size">
          <p>Size:<br></br>{props.details.size}</p>
        </div>
        <div className="Color">
          <p>Colour:<br></br>{props.details.color}</p>
        </div>
        <div className="Initials">
          <p><span>{props.details.initials}</span></p>
        </div>
      </div>
    );
};

export default Product;