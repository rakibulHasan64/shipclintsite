
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

// image import
import dara1 from "../../../assets/image/banner/banner1.png";
import bann2 from "../../../assets/image/banner/banner2.png";
import dara3 from "../../../assets/image/banner/banner3.png";

function Banner() {
   return (
      <div className="container mx-auto mt-7">
         <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
               <img src={dara1} alt="Banner 1" />
               
            </div>
            <div>
               <img src={bann2} alt="Banner 2" />
               
            </div>
            <div>
               <img src={dara3} alt="Banner 3" />
            
            </div>
         </Carousel>
      </div>
   );
}

export default Banner;
