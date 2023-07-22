import illustration from '../images/illustration-thank-you.svg'

export const  ThankYou = ({ rating }) => {
  return (
   <div className='thanks-container'>
    <img class='thanksIllustration' src={illustration} alt="phone picture art" />
    <span className='chosen'><p>You selected {rating} out of 5</p></span>
    <h3>Thank you!</h3>
    <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </p>
   </div>
  )
}


// You selected <!-- Add rating here --> out of 5

// Thank you!

