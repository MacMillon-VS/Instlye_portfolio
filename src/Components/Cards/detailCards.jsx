import { useState } from 'react';

// function Card({ title, col1Heading, col1Features, col2Heading, col2Features, col3Heading, col3Features }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="max-w-[1024px] mx-auto my-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="flex justify-between p-4 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
//           <h2 className="text-lg font-medium">{title}</h2>
//           <svg className={`h-5 w-5 ml-2 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L10 10.585L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" clipRule="evenodd" />
//           </svg>
//         </div>
//         {!isCollapsed &&
//           <div className="flex flex-col md:flex-row p-4">
//             <div className="md:w-1/3">
//               <h3 className="text-md font-medium">{col1Heading}</h3>
//               <ul className="list-disc list-inside">
//                 {col1Features.map((feature, index) => (
//                   <li key={index} className="text-sm">{feature}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="md:w-1/3 mt-4 md:mt-0 md:ml-4">
//               <h3 className="text-md font-medium">{col2Heading}</h3>
//               <ul className="list-disc list-inside">
//                 {col2Features.map((feature, index) => (
//                   <li key={index} className="text-sm">{feature}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="md:w-1/3 mt-4 md:mt-0 md:ml-4">
//               <h3 className="text-md font-medium">{col3Heading}</h3>
//               <ul className="list-disc list-inside">
//                 {col3Features.map((feature, index) => (
//                   <li key={index} className="text-sm">{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         }
//       </div>
//     </div>
//   );
// }

function Card({detC}) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
      <div className="max-w-[1024px] mx-auto my-4">
        <div className="bg-[#000300] rounded-b-lg shadow-md overflow-hidden shadow-cyan-700/30 hover:shadow-cyan-700/70 ">
          <div className="flex justify-between px-4 py-2 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
            <h2 className="text-xl font-semibold">{detC.title}</h2>
            <svg className={`h-5 w-5 ml-2 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L10 10.585L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" clipRule="evenodd" />
            </svg>
          </div>
          {!isCollapsed &&
            <div className="flex flex-col md:flex-row px-12 py-4 ">
              <div className="md:w-1/3 transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 px-2">
                <h3 className="text-lg font-semibold ">{detC.col1Heading}</h3>
                <ul className="list-disc list-inside py-2 px-8 ">
                  {detC.col1Features.map((feature, index) => (
                    <li key={index} className="text-md pb-1 list-outside ">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0 md:ml-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 px-2">
                <h3 className="text-lg font-semibold">{detC.col2Heading}</h3>
                <ul className="list-disc list-inside py-2 px-8">
                  {detC.col2Features.map((feature, index) => (
                    <li key={index} className="text-md pb-1 list-outside">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0 md:ml-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 px-2">
                <h3 className="text-lg font-semibold">{detC.col3Heading}</h3>
                <ul className="list-disc list-inside py-2 px-8">
                  {detC.col3Features.map((feature, index) => (
                    <li key={index} className="text-md pb-1 list-outside">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

export default Card;
