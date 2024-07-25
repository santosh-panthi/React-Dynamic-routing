import React, { useEffect, useState } from "react";

const Services = () => {

const [first, setFrist]=useState('This is first Normal data!')
const [second, setSecond]=useState(' this is second normal data')


  useEffect(() => {
    console.log("Services is Created!");
    return () => {
      console.log("Services is Destroyed!");
    };
  }, [second]);

  return (
    <div className="p-10">
        <h1>{first}</h1>
      <button onClick={()=>{
        setFrist("This is first Changed Data!");
      }} className="bg-red-400 text-white px-5 py-2 rounded-full ">
        Change first Data
      </button>
      <br />
      <br />
      <h1>{second}</h1>
      <button  onClick={()=>{
        setSecond("This is second Changed Data!");
      }}  className="bg-red-400 text-white px-5 py-2 rounded-full ">
        Change second Data
      </button>
    </div>
  );
};

export default Services;
