import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
const ListedBooks = () => {
    return (
        <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Title 2</Tab>
        </TabList>
    
        <TabPanel>
         <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
};

export default ListedBooks;