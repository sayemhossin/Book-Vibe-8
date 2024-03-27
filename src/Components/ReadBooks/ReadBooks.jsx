import { useEffect, useState } from "react";
import { getDataFromLS } from "../../LocalStorage/LocalStorage";
import Read from "./Read";

const ReadBooks = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        setLoadData(getDataFromLS());
    }, []);
if(loadData.length === 0 ){
    return <p className="text-2xl ml-32 mt-20">No books added !!</p>
}
    return (
        <div>
            {
                loadData.map(item => <Read key={item.id} item={item} />)
            }
        </div>
    );
};

export default ReadBooks;
