import { AiOutlineStar } from "react-icons/ai";
const Book = ({item}) => {
    const {image,bookName,author,rating,tags,category} = item
    return (
        <div className="card  bg-base-100 border-2 p-4">
  <figure><img className=" rounded-xl bg-gray-100 px-20 md:px-32 py-7" src={image} alt="Image" /></figure>
  <div className="card-body space-y-2 md:space-y-5">
   <div className="bg-[#dde7dc] text-xs md:text-[16px] w-fit rounded-full p-2 text-[#23BE0A]">
        #{tags}
   </div>
    <h2 className="card-title md:text-4xl font-bold">{bookName}</h2>
    <p className="text-xl font-semibold"> By: {author}</p>
    <hr  className="border-dashed"/>
    <div className="flex text-xl">
      <p>{category}</p>
      <div className="flex items-center gap-3">
        <p>{rating}</p>
        <p><AiOutlineStar /></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Book;