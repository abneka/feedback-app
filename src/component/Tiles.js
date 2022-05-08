import React, {useContext} from 'react'
import Tile from './Tile'
import FeedbackContext from './context/FeedbackContext'

const Tiles = () => {
  const {feedbacks} = useContext(FeedbackContext)
  if (!feedbacks || feedbacks.length === 0)  return (<p>No Feedback Yet</p>)
  return (
    <div className='feedback-list'>
        {feedbacks.map(feedback => <Tile key={feedback.id} feedback={feedback}/>)}
    </div>
  )
}

export default Tiles