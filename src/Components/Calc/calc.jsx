import React, { useState } from "react";
import CalcForm from "../ContactForm/CalcForm";

const Calc = () => {
  const [sqft, setSqft] = useState("");
  const [total, setTotal] = useState(0);
  const[isVisible, setVisible] = useState(true);
  const [sOption, setSOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = parseInt(event.target.value);

    if (selectedValue === 1) {
      setTotal(1799);
      setSOption("Basic");
    } else if (selectedValue === 2) {
      setTotal(2099);
      setSOption("Standard");
    } else if (selectedValue === 3) {
      setTotal(2299);
      setSOption("platinum");
    } else if (selectedValue === 0) {
      setTotal(0);
      setSOption("Option not selected");
    }
  };
  function handleSqft(e) {
    const sq = e.target.value;
    setSqft(sq);
  }
  
  const output = sqft === 0 || "" ? 0 : total * sqft;
  return (
    <div className="bg-inherit">
     <div className='mx-auto text-center flex flex-col text-white px-8 bg-inherit'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 bg-inherit">Construction cost calculator</h1>
        </div>
    
    <div className='max-w-[760px] py-12 mx-auto grid md:grid-cols-2 gap-8 sm:grid-cols-1 text-white bg-inherit'>
      <div className="bg-inherit">
        <label htmlFor="sqftin" className="font-semibold bg-inherit">
          Construction area in sq.ft
        </label>
        <input
          type="number"
          value={sqft}
          id="sqftin"
          min={0}
          className="relative block w-full appearance-none text-white font-medium bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter value in sq. ft"
          onChange={handleSqft}
        />
      </div>

      <div className="bg-inherit">
        <label htmlFor="options" className="block font-semibold bg-inherit ">
          Select Construction Package
        </label>
        <select 
          id="options"
          name="options"
          className="block w-full mt-1 bg-gray-900 font-medium rounded-none rounded-t-md border border-gray-300 px-3 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  py-2 sm:text-sm"
          onChange={handleOptionChange}
        >
          <option value="0">-- Select Plan Type--</option>
          <option value="1">Basic Plan</option>
          <option value="2">Standard Plan</option>
          <option value="3">Premium Plan</option>
        </select>
      </div>
      
    </div>
    <div className="max-w-[1024px] mx-auto mt-8 font-bold text-3xl text-center bg-inherit">
    
    Total ₹ : {output}
    </div>
    <div className="text-center">
    {isVisible&&<button onClick={() => setVisible(!isVisible)} className='justify-center bg-red-500 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white hover:bg-[#00df9a] hover:text-black ease-in-out duration-500  submit__btn'>Submit</button>
    }
    </div>
    <div>   
    {!isVisible && <CalcForm sq={sqft} to={output} options={sOption}/>}
    </div>
    </div>
  );
};

export default Calc;
