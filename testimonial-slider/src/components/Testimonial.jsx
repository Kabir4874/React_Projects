import Card from "./Card"
import PropTypes from 'prop-types';

const Testimonial = ({reviews}) => {
  return (
    <div>
        <Card review={reviews[0]}/>
    </div>
  )
}
Testimonial.propTypes={
    reviews:PropTypes.array,
}

export default Testimonial