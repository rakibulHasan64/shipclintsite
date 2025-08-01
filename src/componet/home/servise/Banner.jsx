import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// image import
import dara1 from "../../../assets/image/banner/banner1.png";
import bann2 from "../../../assets/image/banner/banner2.png";
import dara3 from "../../../assets/image/banner/banner3.png";
import dara4 from "../../../assets/image/banner/Photography webinar.png";

function Banner() {
   return (
      <div className="container mx-auto mt-7">
         <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
         >
            {[dara1, bann2, dara3, dara4].map((img, idx) => (
               <div key={idx}>
                  <img
                     src={img}
                     alt={`Banner ${idx + 1}`}
                     className="w-full h-[600px]  rounded-xl"
                  // Fallback in case Tailwind doesn't apply
                  />
               </div>
            ))}
         </Carousel>
      </div>
   );
}

export default Banner;

