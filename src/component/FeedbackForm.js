import React, { useEffect, useState, useContext } from 'react'
import Card from './shared/Card'
import { Actions } from './context/FeedbackContext'
import Button from './shared/Button'
import Rating from './Rating'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = () => {
    const {dispatch, editMode, setEditMode} = useContext(FeedbackContext)
    const [text, setText] = useState(() => '')
    const [isEnabled, setIsEnabled] = useState(() => false)
    const [selected, setSelected] = useState(3)
    useEffect(() => {
        (text.length >= 10) ? setIsEnabled(true) : setIsEnabled(false)
    }, [text])
    function handleInput (e) {
        e.preventDefault()
        if (!editMode) {
            dispatch({type: Actions.ADD_FEEDBACK, payload: {rating: selected, text: text}})
        }
        else {
            document.getElementById(editMode.id).animate([
                {opacity: 1},
                {opacity: 0.5},
                {opacity: 0.2},
                {opacity: 0.5},
                {opacity: 1}
            ],{
                duration:800,
                direction:'alternate'
            })
            dispatch({type: Actions.EDIT_FEEDBACK, payload:{update: {id: editMode.id, rating:selected, text: text}}})
            setEditMode()
        }
        setText('')
        setSelected(3)
    }
    useEffect(()  => {
        if(editMode) {
            setText(editMode.text)
            setSelected(+editMode.rating)
        }
    },[editMode])
  return (
    <Card>
        <form onSubmit={handleInput}>
            <h2>How would you rate your service witht us?</h2>
            <Rating selected={selected} setSelected={setSelected}/>
            <div className='input-group'>
                <input
                    onChange={e => setText(e.target.value)}
                    type='text'
                    placeholder='Write a review'
                    value={text}
                />
                <Button isDisabled={!isEnabled} version='secondary' onClick={handleInput} type='submit' >{!editMode ? 'Send' : 'Update'}</Button>
            </div>
            <div className='message'>{!isEnabled && 'Minimum characters is 10'}</div>
        </form>
    </Card>
  )
}

export default FeedbackForm