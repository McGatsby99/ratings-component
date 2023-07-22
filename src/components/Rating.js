import iconStar from '../images/icon-star.svg'

export const Rating = ({ setRating, setSubmit, rating }) => {

    let selections = [1, 2, 3, 4, 5];

  return (
    <>
        <span className='star-icon' >
            <img className='starIcon' src={iconStar} alt='star icon' width={10} />
        </span>
        <h3>How did we do?</h3>
        <p>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
        </p>
        <div className='ratings-container'>
            {
              selections.map((selection, ind) => <button className={`rating ${selection === rating? 'active': ''}`} key={ind} onClick={() => setRating(selection)} >{selection}</button> )
            }
        </div>
        <button className="btn" onClick={() => setSubmit(true)}>SUBMIT</button>
    </>
  )
}
