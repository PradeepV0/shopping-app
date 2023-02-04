import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { data } from './Data/data';
import './ProductComponent.css'

export function ProducComponent (){
    const [cart,setcart] = useState(data);
    const [item,setItems] = useState(0);
   
   
  return (
    <div>
      <div className='heading'>
      <h1>Best Mobiles</h1>
      <sapn className="span">cart {item} </sapn>
      </div>
    <div className='product-data'>     
      {cart.map((product,idx)=>(
        <CardDetails
        key={idx}
        idx = {idx}
        Image = {product.productImg}
        Name = {product.productName}
        Price = {product.productPrice}
        Rating = {product.productRating}
        cart = {cart}
        setCart = {setcart}
        item = {item}
        setItems = {setItems}
        // showbtn = {showbtn}
        // setshowbtn = {setshowbtn}



        />
      
         

      ))}
      
    </div>
    </div>
  )
}


function CardDetails ({setCart, setItems, prodPrice, Image, Name,Rating, idx , item}) {
  let count = 0
   const [showBtn, setShowBtn] = useState(true);
   const handleCartAdd = (idx, setItems, item) => {
       setShowBtn(!showBtn)
       setItems(item + 1)

   }
   const handleCartRemove = (idx, setItems , item, setCart) =>{
      setShowBtn(!showBtn)
      setItems(item - 1)
     ///
   }

   return(
   <Card className='cart' style={{ width: '18rem', padding: "10px"}}>
   <Card.Img variant="top" src={Image} />
   <Card.Body>
     <Card.Title>{Name}</Card.Title>
     <p className="price-cart">RS. {Price}</p>
     <p className="rating-data">{Rating}</p>
   </Card.Body>
   <div className="btn-area">
       {showBtn ? <Button onClick={()=>handleCartAdd(idx, setItems, item)} variant="primary">Add</Button>: 
        <Button onClick={()=>handleCartRemove(idx, setItems, item , setCart)} variant="secondary">Remove </Button>  }
   </div>
 </Card>
   )

}



