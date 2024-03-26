import { useEffect, useState } from "react";
import {  getDataFromLS2 } from "../../LocalStorage/LocalStorage";
import Wish from "./Wish";

const WishlistBook = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        setLoadData(getDataFromLS2());
    }, []);
    return (
        <div>
          {
                loadData.map(item => <Wish key={item.id} item={item} />)
            }
        </div>
    );
};

export default WishlistBook;