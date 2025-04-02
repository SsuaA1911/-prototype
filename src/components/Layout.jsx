import React from "react";
import { Outlet,Link } from "react-router-dom";

const Layout=() => {
    return(
        <div className="bg-gray-300 flex flex-col">
            <nav className="bg-amber-300  py-5">
                <ul className="flex pr-20 gap-10 justify-end text-3xl font-bold ">
                    <li>
                        <Link to="/" className="hover:text-amber-700">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/owner" className="hover:text-amber-700">Owner</Link>

                    </li>
                </ul>
            </nav>
            <div className="bg-amber-400 w-full p-6">
                <Outlet/>
            </div>
        </div>
  );
};
export default Layout;