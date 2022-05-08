import { createContext, useReducer, useState } from "react";

const FeedbackContext = createContext()

export const Actions = {
    ADD_FEEDBACK: 'addFeedback',
    DELETE_FEEDBACK: 'deleteFeedback',
    EDIT_FEEDBACK: 'editFeedback'
  }
  
function reducer (feedbacks, actions) {
    switch (actions.type) {
        case Actions.ADD_FEEDBACK:
            return [{id: Date.now(), rating: actions.payload.rating, text: actions.payload.text}, ...feedbacks]
        case Actions.DELETE_FEEDBACK:
            return feedbacks.filter(feedback => feedback.id !== actions.payload.id)
        case Actions.EDIT_FEEDBACK:
            return feedbacks.map(feedback => {
                if (actions.payload.update.id === feedback.id) {
                    return actions.payload.update
                }
                return feedback
            })
        default:
            return feedbacks
    }
}

export const FeedbackProvider = ({children}) => {
    const [feedbacks, dispatch] = useReducer(reducer, [
        {
          id: 1,
          rating: '5',
          text: 'This app has the greatest UI I have ever seen'
        },
        {
          id: 2,
          rating: '4',
          text: 'This is a great up, I have always recommended your app'
        },
        {
          id: 3,
          rating: '3',
          text: 'It is a good job keep it up, up up and away'
        },
        {
          id: 4,
          rating: '2',
          text: 'the following program contains scenes and graphic stupidity among life long friends who compete to embarrass each other'
        },
      ])
      
      const [editMode, setEditMode] = useState()
    return (
        <FeedbackContext.Provider value={{
            feedbacks,
            dispatch,
            editMode,
            setEditMode
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default  FeedbackContext