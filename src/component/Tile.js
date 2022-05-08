import React, { useContext, useEffect } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { Actions } from './context/FeedbackContext' 
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext'

const Tiles = ({feedback}) => {
  const {dispatch, setEditMode} = useContext(FeedbackContext)
  function deleteFeedback () {
    document.getElementById(feedback.id).animate([
        {opacity: 1},
        {opacity: 0.5},
        {opacity: 0.2},
    ],{
        duration:800,
        direction:'alternate'
    })
    setTimeout(() => {
      dispatch({type: Actions.DELETE_FEEDBACK, payload: {id: feedback.id}})
    },500)
  }
  useEffect(() => {
    function fadeIn() {
      document.getElementById(feedback.id).animate([
          {opacity: 0.2},
          {opacity: 0.5},
          {opacity: 1},
      ],{
          duration:500,
          direction:'alternate'
      })
    }
    fadeIn()
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])
  return (
    <div id={feedback.id}>
      <Card>
          <div className='num-display'>{feedback.rating}</div>
          <button className='close' >
              <FaTimes onClick={deleteFeedback} color='purple'/>
          </button>
          <button className='edit' >
              <FaEdit onClick={() => setEditMode(feedback)} color='purple'/>
          </button>
          <div className='text-dispaly'>
              {feedback.text}
          </div>
      </Card>
    </div>
  )
}

export default Tiles