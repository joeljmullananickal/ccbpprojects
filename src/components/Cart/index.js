import {useContext} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const renderEmptyView = () => (
    <div className="empty-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty view"
        className="empty-view-image"
      />
      <p className="empty-description">Your cart is Empty.</p>
      <Link to="/">
        <button type="button">Go Home</button>
      </Link>
    </div>
  )

  const renderCartItems = () => (
    <>
      <div className="cart-items-header">
        <h1>Cart Items</h1>
        <button
          type="button"
          className="remove-all-btn text-primary"
          onClick={removeAllCartItems}
        >
          Remove All
        </button>
      </div>
      <ul className="ps-0 d-flex flex-column align-items-center">
        {cartList.map(dish => (
          <CartItem key={dish.dishId} cartItemDetails={dish} />
        ))}
      </ul>
    </>
  )

  return (
    <div className="cart-page-container d-flex flex-column">
      <Header />
      <div className="cart-body-container d-flex flex-column">
        {cartList.length === 0 ? renderEmptyView() : renderCartItems()}
      </div>
    </div>
  )
}

export default Cart
