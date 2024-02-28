import Testimonial from "./components/Testimonial"
import reviews from './Data'

function App() {


  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
}

export default App
