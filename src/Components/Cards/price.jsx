import React from 'react';


const PCards = ({priceC}) => {
    
  return (
    
    <div className="w-full shadow-xl flex flex-col p-2 my-2 rounded-lg ">
  <div 
    className="block max-w-sm rounded-lg bg-white dark:bg-neutral-700 hover:scale-105 duration-300 shadow-[0_4px_9px_-4px_#3b71ca] transition  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="" />
    </a>
    <div className="p-6 bg-[#000300]">
    <div className='text-center  text-white'>
                <p className='pt-2 text-3xl font-bold'>{priceC.title}</p>
                <p className='pb-2 border-b text-gray-600'>{priceC.msg}</p>
                <div className='py-4 mt-4 bg-red-500 font-bold text-center'>
                    <p className='text-3xl bg-inherit'><span className='line-through text-lg bg-inherit'>₹ {priceC.duplicatPrice}</span><sup className='bg-inherit text-lg'>₹</sup>{priceC.price}</p>
                </div>
                {/* <ul>
        {priceC.details &&
          priceC.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
      </ul> */}
      <div className='text-left font-medium mt-4'>
      {priceC.details &&
          priceC.details.map((detail, index) => (
                  <p className='py-2 border-b mx-8' key={index}>&rarr; {detail}</p>
          ))}
                  </div>

                  {/* <div className='text-left font-medium mt-4'>
                  <p className='py-2 border-b mx-8 '>&rarr;weref</p>
                  <p className='py-2 border-b mx-8 '>&rarr; dadd</p>
                  <p className='py-2 border-b mx-8'>&rarr;asd</p>
                  <p className='py-2 border-b mx-8'>&rarr; RCC foundation & roof</p>
                  </div> */}
              </div>
      {/* <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Button
      </button> */}
    </div>
  </div>
</div>

  );
};

export default PCards;