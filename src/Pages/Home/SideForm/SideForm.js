import React, { useState } from "react";

const SideForm = () => {
  const [open, setOpen] = useState(false);
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(1);
  const [baby, setBaby] = useState(1);
  const [searchData, setSearchData] = useState({});

  const getDate = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...searchData };
    newData[field] = value;
    newData["adult"] = adult;
    newData["child"] = child;
    setSearchData(newData);
    console.log(adult, child);
  };
  console.log(searchData);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Where do you want to go</h1>
      <div className="my-3 p-2 bg-white rounded-lg shadow-md">
        <label className="block">
          <span className=" block pl-3 text-sm font-bold text-black uppercase">
            Location
          </span>
          <input
            type="text"
            name="location"
            onChange={getDate}
            className="mt-1 px-3 py-2 bg-white   placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Add city, Landmark or address"
          />
        </label>
      </div>
      <div className="flex align-middle justify-between">
        <div className="my-3 p-2 bg-white rounded-lg shadow-md ">
          <label className="block">
            <span className=" block pl-2 text-sm font-bold text-gray-300">
              Arrival
            </span>
            <input
              type="date"
              name="arrival"
              onChange={getDate}
              className="py-2 bg-white font-bold placeholder-slate-400 outline-none block w-full rounded-md sm:text-sm "
              placeholder="Add city, Landmark or address"
            />
          </label>
        </div>
        <div className="my-3 p-2 bg-white rounded-lg shadow-md ">
          <label className="block">
            <span className=" block pl-2 text-sm font-bold text-gray-300">
              Departure
            </span>
            <input
              type="date"
              name="departure"
              onChange={getDate}
              className="py-2 bg-white font-bold placeholder-slate-400  block w-full rounded-md sm:text-sm outline-none"
              placeholder="Add city, Landmark or address"
            />
          </label>
        </div>
      </div>
      <div className="mt-3 p-2 bg-white rounded-lg shadow-md relative">
        <div>
          <span className=" block pl-2 text-sm font-bold text-gray-300">
            Guests
          </span>
          <p className="text-md pl-2 uppercase font-bold">
            {adult} Adults, {child} Child
          </p>
        </div>
        <div className="text-xl absolute right-8 top-5 cursor-pointer">
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "chevron-up-outline" : "chevron-down-outline"}
          ></ion-icon>
        </div>
      </div>
      {open && (
        <div className="mt-1 mb-3 py-4 px-4 bg-white rounded-lg shadow-md transition-all duration-500 ease-in">
          {/* adult */}
          <div className="flex items-center justify-between py-3">
            <p className="text-md pl-2 uppercase font-bold">Adults</p>
            <div>
              <div className="text-xl font-bold flex items-center justify-items-center gap-4 ">
                <div className="cursor-pointer">
                  {adult > 1 ? (
                    <ion-icon
                      onClick={(e) => setAdult(adult - 1)}
                      name="remove-outline"
                    ></ion-icon>
                  ) : (
                    <ion-icon name="remove-outline"></ion-icon>
                  )}
                </div>
                <div>
                  <span>{adult}</span>
                </div>
                <div className="cursor-pointer">
                  <ion-icon
                    onClick={(e) => setAdult(adult + 1)}
                    name="add-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>
          {/* child */}
          <div className="flex items-center justify-between py-3">
            <p className="text-md pl-2 uppercase font-bold">childs</p>
            <div>
              <div className="text-xl font-bold flex items-center justify-items-center gap-4 ">
                <div className="cursor-pointer">
                  {child > 0 ? (
                    <ion-icon
                      onClick={(e) => setChild(child - 1)}
                      name="remove-outline"
                    ></ion-icon>
                  ) : (
                    <ion-icon name="remove-outline"></ion-icon>
                  )}
                </div>
                <div>
                  <span>{child}</span>
                </div>
                <div className="cursor-pointer">
                  <ion-icon
                    onClick={(e) => setChild(child + 1)}
                    name="add-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>
          {/* baby */}
          <div className="flex items-center justify-between py-3">
            <p className="text-md pl-2 uppercase font-bold">babies</p>
            <div>
              <div className="text-xl font-bold flex items-center justify-items-center gap-4 ">
                <div className="cursor-pointer">
                  {baby > 0 ? (
                    <ion-icon
                      onClick={(e) => setBaby(baby - 1)}
                      name="remove-outline"
                    ></ion-icon>
                  ) : (
                    <ion-icon name="remove-outline"></ion-icon>
                  )}
                </div>
                <div>
                  <span>{baby}</span>
                </div>
                <div className="cursor-pointer">
                  <ion-icon
                    onClick={(e) => setBaby(baby + 1)}
                    name="add-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={(e) => setOpen(false)}
              className="border-2 rounded-md border-emerald-500 text-lg text-emerald-500 font-semibold mt-2 py-1 px-4  md:ml-8 hover:bg-emerald-500 hover:text-white duration-500"
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <div className="w-full mt-3">
        <button className="bg-gradient-to-r w-full from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-md  hover:opacity-90 duration-500 flex items-center justify-center">
          <span className="mr-1 mt-2">
            <ion-icon name="search-outline"></ion-icon>
          </span>{" "}
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SideForm;
