import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  )
}
export default ImageCarousel
