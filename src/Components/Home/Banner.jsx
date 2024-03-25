
const Banner = () => {
    return (
        <div className="hero mt-5 rounded-xl  h-[550px] bg-base-200">
  <div className="hero-content flex-col md:gap-96  lg:flex-row-reverse">
    <div>
    <img src="https://i.ibb.co/WkL9PC5/pngwing-1.png" className="max-w-sm w-40 md:w-80 rounded-lg " />

    </div>
    <div className="space-y-10 md:space-y-40">
      <h1 className="text-3xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1>
     
      <button className="btn  text-xl border-0 hover:bg-[#51bd41] bg-[#23BE0A] px-7 btn-primary">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;