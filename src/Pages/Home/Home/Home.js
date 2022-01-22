import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import SideForm from "../SideForm/SideForm";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="mt-24 w-4/5	mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div>
            <SideForm />
          </div>
          <div className="md:col-span-2">1</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
