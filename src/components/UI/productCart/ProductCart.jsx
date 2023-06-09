import React from "react"
import productImg from "../../../assets/images/product_2.1.jpg"
import { Link } from "react-router-dom"
import "../../../styles/productCart.css"

import { useDispatch } from "react-redux"
import { cartActions } from "../../../store/shopping-Cart/cartSlice"

const ProductCart = (props) => {
  const { id, title, image01, price } = props.item
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price
      })
    )
  }

  return (
    <div className='product__item'>
      <div className='product__img'>
        <img src={image01} alt='' className='w-100' />
      </div>
      <div className='product__content'>
        <h5>
          <Link to={`/food/${id}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between gap-2'>
          <span className='product__price'>${price}</span>
          <button className='addToCart__btn' onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
