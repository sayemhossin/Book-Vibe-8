import UseData from "../../UseData/UseData";
import Book from "./Book";

const Books = () => {
    const {data} = UseData()
 
    return (
        <div>
            <h1 className="text-center text-5xl mt-6 font-extrabold ">Books</h1>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
           {
                data.map(item => <Book key={item.id} item={item}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;