import { Outlet,useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    const navigation = useNavigation()
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
          <div>
          {
           navigation.state === 'loading'?  <span className="loading loading-bars loading-lg"></span> :<Outlet></Outlet>
        }
          </div>
           <ToastContainer />
        </div>
    );
};

export default Root;