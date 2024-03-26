import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishlistBook from './WishlistBook';
const ListedBooks = () => {
    return (
     <>
     <div className='text-center rounded-lg font-extrabold text-5xl p-6 bg-base-200 '>
     <h1>Books</h1>
     </div>
        <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
    
        <TabPanel>
         <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBook></WishlistBook>
        </TabPanel>
      </Tabs>
      </>
    );
};

export default ListedBooks;