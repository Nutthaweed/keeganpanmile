import { Parallax } from 'react-parallax'
import ContactKeegan from '../img/keegan3.jpg'

const ImageThree = () => (
    <Parallax className="contact"blur={0} bgImage={ContactKeegan} bgImageAlt="keegan1" strength={800}>
       <div className="kee">
           <span className="img-text">Remember My Name</span>
       </div>
    </Parallax>
)

export default ImageThree