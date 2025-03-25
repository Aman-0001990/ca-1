import React from 'react'
import '../App.css'
const TestimonialCard = (props) => {
  return (
    <div className='Container'>
        <h1>Information</h1>
        <div className="Card-container">
            <div className="cards">
<h2>Customer name {props.customer}</h2>
<h4>Review text {props.reviewText}</h4>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard