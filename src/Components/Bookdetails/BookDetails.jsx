import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseData from "../../UseData/UseData";
import { setDataToLS } from "../../LocalStorage/LocalStorage";

const BookDetails = () => {
    const [singleData, setSingleData] = useState(null);
    const { id } = useParams();
    const { data } = UseData();

    useEffect(() => {
        const singleBook = data.find(item => item.id === parseInt(id));
        setSingleData(singleBook);
    }, [data, id]);

    if (!singleData) {
        return <div>Loading...</div>;
    }
const handleRead = () =>{
    setDataToLS(singleData)
}
    const { image, bookName, author, yearOfPublishing, rating, totalPages, tags, category, review } = singleData;

    return (
        <div>
            <div className="hero  h-[600px] ">
                <div className="hero-content  md:gap-52 flex-col lg:flex-row">
                    <div>
                        <img src={image} className="w-64 md:w-[600px] h-full p-4  rounded-lg bg-base-100 " alt="Book Cover" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6 text-xl font-semibold">By: {author}</p>
                        <div className="divider mt-0"></div>

                        <p>{category}</p>
                        <div className="divider mt-0"></div>
                        <p className="py-6 text-xl font-semibold">Review: {review}</p>
                        <p className="text-[#23BE0A] bg-[#d8f1d5] p-2 rounded-full w-fit">Tag: #{tags}</p>
                        <div className="divider mt-0"></div>


                        <div className="grid grid-cols-2 text-xl gap-0">
                            <h1>Name Of Pages:</h1>
                            <p className="font-bold">{totalPages}</p>
                            <h1>Publisher:</h1>
                            <p className="font-bold">{author}</p>
                            <h1>Year of Publishing:</h1>
                            <p className="font-bold">{yearOfPublishing}</p>
                            <h1>Rating:</h1>
                            <p className="font-bold">{rating}</p>
                        </div>
                        <div  className="flex gap-9 mt-10 ">
                            <button onClick={handleRead} className="btn text-xl">Read</button>
                            <button className="btn bg-[#50B1C9] text-white text-xl">Wishlist</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;
