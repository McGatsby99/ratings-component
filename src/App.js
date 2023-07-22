import './App.css';
import { Rating } from './components/Rating';
import {useState} from 'react'
import { ThankYou } from './components/ThankYou';

function App() {

  const [rating, setRating] = useState(0)
  const [submit, setSubmit] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <div className='content'>
          {
            submit
            ? <ThankYou rating={rating} />
            : <Rating setRating={setRating} setSubmit={setSubmit} rating={rating} />

          }
        </div>
      </div>
    </div>
  );
}

export default App;
