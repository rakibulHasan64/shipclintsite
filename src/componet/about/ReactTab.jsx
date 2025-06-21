
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
               <div className="">
                  Story
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

