import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero mt-5 rounded-xl  h-[550px] bg-base-200">
  <div className="hero-content flex-col md:gap-96  lg:flex-row-reverse">
    <div>
    <img src="https://i.ibb.co/WkL9PC5/pngwing-1.png" className="max-w-sm w-40 md:w-80 rounded-lg " />

    </div>
    <div className=" ">
      <h1 className="text-3xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1>
     
      <Link to={'/listed-books'}>
      <button className="btn mt-10 md:mt-24 text-xl border-0 hover:bg-[#51bd41] bg-[#23BE0A] px-7 btn-primary">View The List</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;