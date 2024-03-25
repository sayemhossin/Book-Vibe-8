import { useEffect, useState } from "react";
import { getDataFromLS } from "../../LocalStorage/LocalStorage";
import Read from "./Read";

const ReadBooks = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        setLoadData(getDataFromLS());
    }, []);

    return (
        <div>
            {
                loadData.map(item => <Read key={item.id} item={item} />)
            }
        </div>
    );
};

export default ReadBooks;
