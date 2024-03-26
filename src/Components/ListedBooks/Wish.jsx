import { FaFile, FaLocationDot, FaUserGroup } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Wish = ({item}) => { const { image,bookName,author,publisher,rating,yearOfPublishing,tags,category,totalPages} = item
    return (
        <div className="   mt-5 border-2 p-4  rounded-lg">
        <div className="flex gap-14 flex-col lg:flex-row">
          <div className="flex justify-center">
          <img src={image} className=" w-60 px-5  rounded-lg bg-base-200" />
          </div>
          <div className="flex-1 md:space-y-3">
            <h1 className=" text-2xl md:text-5xl font-bold">{bookName}</h1>
            <p className="py-6 text-xl font-bold">By: {author}</p>

            <div className="flex md:items-center flex-col md:flex-row md:gap-11">
            <p className= " md:text-xl  text-[#23BE0A] bg-[#d8f1d5] p-2 rounded-full w-fit">Tag: #{tags}</p>
            <p className="font-semibold flex items-center gap-2"><FaLocationDot /> Year of Publishing: {yearOfPublishing}</p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-16 text-gray-400 text-[18px]">
            <p className="flex items-center gap-2"><FaUserGroup /> Publisher: {publisher}</p>
            <p className="flex items-center gap-2"><FaFile />
 Page {totalPages}</p>
            </div>


<div className="divider"></div>






           <div className=  "flex flex-col md:flex-row gap-6 text-xl">
         <h1 className="bg-[#b9d7fc] text-[#328EFF] p-2 rounded-full text-center
         ">Category: {category}</h1>
         <h1 className="bg-[#ffe5be] text-[#3FFAC33] px-4 p-2 rounded-full text-center
         ">Rating: {rating}</h1>
        <button className="btn rounded-full bg-[#23BE0A] text-xl">view Details</button>
           </div>
          </div>
        </div>
      </div>


    );
};

Wish.propTypes ={
  item:PropTypes.object
}

export default Wish;