import { useEffect, useState } from "react";
import {  getDataFromLS2 } from "../../LocalStorage/LocalStorage";
import Wish from "./Wish";

const WishlistBook = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        setLoadData(getDataFromLS2());
    }, []);

    if(loadData.length === 0 ){
        return <p className="text-2xl ml-32 mt-20">No books added !!</p>
    }
    return (
        <div>
          {
                loadData.map(item => <Wish key={item.id} item={item} />)
            }
        </div>
    );
};

export default WishlistBook;