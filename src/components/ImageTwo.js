import { Parallax } from 'react-parallax'
import AboutKeegan from '../img/keegan2.jpg'

const ImageTwo = () => (
    <Parallax className="image"blur={2} bgImage={AboutKeegan} bgImageAlt="keegan1" strength={800}>
       <div className="keeganabout">
           <span className="img-text">Keegan Panmile</span>
       </div>
    </Parallax>
)

export default ImageTwo