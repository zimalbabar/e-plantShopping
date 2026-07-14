import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';


const CartItem = ({ onContinueShopping }) => {


  const cart = useSelector(state => state.cart.items);

  const dispatch = useDispatch();



  // Calculate total cart amount
  const calculateTotalAmount = () => {

    return cart.reduce(
      (total, item) =>
        total + parseFloat(item.cost.substring(1)) * item.quantity,
      0
    );

  };



  // Continue Shopping
  const handleContinueShopping = (e) => {

    e.preventDefault();

    if(onContinueShopping){
      onContinueShopping();
    }

  };



  // Checkout
  const handleCheckoutShopping = (e) => {

    alert('Functionality to be added for future reference');

  };



  // Increase quantity
  const handleIncrement = (item) => {


    dispatch(
      updateQuantity({
        name:item.name,
        amount:item.quantity + 1
      })
    );


  };



  // Decrease quantity
  const handleDecrement = (item) => {


    if(item.quantity > 1){


      dispatch(
        updateQuantity({
          name:item.name,
          amount:item.quantity - 1
        })
      );


    }
    else{


      dispatch(
        removeItem(item.name)
      );


    }


  };




  // Remove item
  const handleRemove = (item) => {


    dispatch(
      removeItem(item.name)
    );


  };




  // Individual item total
  const calculateTotalCost = (item) => {


    return parseFloat(item.cost.substring(1)) * item.quantity;


  };




  return (

    <div className="cart-container">


      <h2 style={{color:'black'}}>

        Total Cart Amount: ${calculateTotalAmount()}

      </h2>



      {

      cart.map(item => (

        <div className="cart-item" key={item.name}>


          <img

            className="cart-item-image"

            src={item.image}

            alt={item.name}

          />



          <div className="cart-item-details">


            <div className="cart-item-name">

              {item.name}

            </div>




            <div className="cart-item-cost">

              Unit Cost: {item.cost}

            </div>





            <div className="cart-item-quantity">



              <button

                className="cart-item-button cart-item-button-dec"

                onClick={()=>handleDecrement(item)}

              >

                -

              </button>





              <span className="cart-item-quantity-value">

                {item.quantity}

              </span>





              <button

                className="cart-item-button cart-item-button-inc"

                onClick={()=>handleIncrement(item)}

              >

                +

              </button>



            </div>





            <div className="cart-item-total">


              Subtotal: ${calculateTotalCost(item)}


            </div>





            <button

              className="cart-item-delete"

              onClick={()=>handleRemove(item)}

            >

              Delete


            </button>




          </div>



        </div>


      ))

      }




      <div className="continue_shopping_btn">



        <button

          className="get-started-button"

          onClick={handleContinueShopping}

        >

          Continue Shopping


        </button>




        <br />




        <button

          className="get-started-button1"

          onClick={handleCheckoutShopping}

        >

          Checkout


        </button>




      </div>



    </div>


  );


};



export default CartItem;
