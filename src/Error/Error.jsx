import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="relative">
           <Link to={'/'}> <button className="ml-14 md:absolute text-2xl btn btn-link">Go Back</button> </Link>
           <img className="w-screen md:h-screen md:p-9 " src="https://i.ibb.co/WPh5cNF/50-Cool-and-Creative-404-Error-Pages-25.jpg" alt="" />
        </div>
    );
};

export default Error;