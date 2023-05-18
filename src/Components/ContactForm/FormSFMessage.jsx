import React,{useState,useEffect} from 'react';

export const SuccessAlert = ({ onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }, [onClose]);
  
    function handleHide() {
      setVisible(false);
      onClose();
    }
  return (
    <div className={`fixed top-0 right-0 bg-green-500 text-white px-4 py-2  ${visible ? 'visible' : 'invisible'} transition duration-500 z-40`}>
    <p>Thank you for contact us!</p>
    <button className="float-right" onClick={handleHide}>x</button>
  </div>
    
  );
};

export const FailedAlert = ({ onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }, [onClose]);
  
    function handleHide() {
      setVisible(false);
      onClose();
    }
  return (
    <div className={`fixed top-0 right-0 bg-red-500 text-white px-4 py-2  ${visible ? 'visible' : 'invisible'} transition duration-500 z-40`}>
    <p>Failed! Try again Later</p>
    <button className="float-right" onClick={handleHide}>x</button>
  </div>
    
  );
};

// export const FailedAlert = ({ onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-red-500 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-4 rounded-lg flex flex-col justify-center items-center">
//         <p className="text-xl font-medium text-gray-800 mb-2">Failed to submit form</p>
//         <button
//           className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-600 transition-colors duration-300"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };
