import Compony from "./company/Compony";
import CustomarSar from "./customar/CustomarSar";
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
         
      </>
   );
}

export default HomeLayout;