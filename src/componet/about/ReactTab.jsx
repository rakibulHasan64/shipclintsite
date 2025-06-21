
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function ReactTab() {
   return (
      <>
         <Tabs>
            <TabList>
               <Tab>Story</Tab>
               <Tab>Mission</Tab>
               <Tab>Success</Tab>
               <Tab>Team & Others</Tab>
            </TabList>

            <TabPanel>
               <div className="text-gray-400 mt-10 ">
                  <p className='mb-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,<br /> efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business<br /> delivery, we ensure it reaches its destination — on time, every time.</p>
                  <p className='mb-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,<br /> efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business<br /> delivery, we ensure it reaches its destination — on time, every time.</p>
                  <p className='mb-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,<br /> efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business<br /> delivery, we ensure it reaches its destination — on time, every time.</p>

               </div>
            </TabPanel>
            <TabPanel>
               <div className="">
                  Mission
               </div>
            </TabPanel>
            <TabPanel>
               <div className="">Success</div>
            </TabPanel>
            <TabPanel>
               <div className="">Team & Others</div>
            </TabPanel>
         </Tabs>
         
      </>
   );
}

export default ReactTab;

