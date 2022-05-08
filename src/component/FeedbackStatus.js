import React, {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackStatus = () => {
  const {feedbacks} = useContext(FeedbackContext)
  let average = feedbacks.reduce((total, count) => total + parseInt(count.rating), 0)/ feedbacks.length
  average=average.toFixed(1).replace(/.0$/, '')
  return (
    <div className='feedback-stats'>
        <h4>Total rating: {feedbacks.length}</h4>
        <h4>Average rating: { isNaN(average)? 0 : average }</h4>
    </div>
  )
}

export default FeedbackStatus