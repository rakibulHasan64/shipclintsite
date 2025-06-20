import Marquee from "react-fast-marquee";
import dafa1 from '../../../assets/image/brands/amazon.png'
import dafa2 from '../../../assets/image/brands/amazon_vector.png'
import dafa3 from '../../../assets/image/brands/casio.png'
import dafa4 from '../../../assets/image/brands/moonstar.png'
import dafa5 from '../../../assets/image/brands/randstad.png'
import dafa6 from '../../../assets/image/brands/start-people 1.png'
import dafa7 from '../../../assets/image/brands/start.png'

function Compony() {
   const brands = [dafa1, dafa2, dafa3, dafa4, dafa5, dafa6, dafa7];

   return (
      <div className="container mx-auto py-20 mt-11">
         <h3 className="text-center text-[22px] font-bold mb-6">
            We've helped thousands of sales teams
         </h3>

         <Marquee speed={60} gradient={false} pauseOnHover={true}>
            {brands.map((logo, idx) => (
               <div key={idx} className="mx-8 mt-16">
                  <img src={logo} alt={`brand-${idx}`} className="" />
               </div>
            ))}
         </Marquee>
      </div>
   );
}

export default Compony;
