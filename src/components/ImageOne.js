import { Parallax } from 'react-parallax'
import Keegan from '../img/keegan1.jpg'

const ImageOne = () => (
    <Parallax className="kg"blur={1} bgImage={Keegan} bgImageAlt="keegan1" strength={800}>
       <div className="keegan">
           <span className="img-text">Keegan Panmile</span>
       </div>
    </Parallax>
)

export default ImageOne