import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Show() {
  const [setData, getData] = useState([]);
  const fetchData = async () => {
    const products = await axios.get("/products");
    getData(products.data);
  };



useEffect(()=>{
  fetchData()
}, [])

  return (
    <div className="p-20">
      <h1>Fetching Data from API...</h1>
      {/* <button
        // onClick={fetchData}
        className="bg-red-400 text-white px-5 py-2 rounded-full "
      >
        Fetch Data
      </button> */}
      <ul>
        {setData.length > 0 ? (
          setData.map((item) => (
            <li className="p-2 rounded mt-2 bg-red-200" key={item.id}>
              {item.title}
            </li>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </div>
  );
}
