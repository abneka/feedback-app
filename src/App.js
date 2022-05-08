import FeedbackForm from "./component/FeedbackForm"
import FeedbackStatus from "./component/FeedbackStatus"
import Header from "./component/Header"
import Tiles from "./component/Tiles"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./component/pages/About"
import AboutLink from "./component/AboutLink"
import { FeedbackProvider } from './component/context/FeedbackContext'

export default function App () {
  return (
    <FeedbackProvider>
        <Router>
        <Header/>
        <div className="container">
          <Routes>
          {/* <Route path='/*' element={<h2>404 Not Found</h2>}/> */}
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStatus />
                <Tiles/>
              </>
            } />
            <Route path='/about' element={<About/>}/>
          </Routes>
          <AboutLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
}