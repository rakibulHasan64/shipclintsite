import Compony from "./company/Compony";
import CustomarSar from "./customar/CustomarSar";
import CustomarSatinge from "./customar/CustomarSatinge";
import Fqk from "./customar/Fqk";
import Fasceleties from "./ourservise/Fasceleties";
import OurServise from "./ourservise/OurServise";
import Banner from "./servise/Banner";
import Works from "./servise/Works";


function HomeLayout() {
   return (
      <>
         <Banner />
         <Works />
         <OurServise />
         <Compony />
         <Fasceleties />
         <CustomarSar />
         <CustomarSatinge />
         <Fqk />

         
         
         
         
      </>
   );
}

export default HomeLayout;