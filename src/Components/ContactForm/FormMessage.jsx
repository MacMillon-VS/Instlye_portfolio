import React, { useState, useEffect } from 'react';

function FormMessage({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  function handleHide() {
    setVisible(false);
    onClose();
  }

  return (
    <div className={`fixed bottom-0 right-0 bg-green-500 text-white px-4 py-2 ${visible ? 'visible' : 'invisible'} transition duration-300`}>
      <p>Your form has been submitted successfully!</p>
      <button className="float-right" onClick={handleHide}>x</button>
    </div>
  );
}

export default FormMessage;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// const ShowSuccessAlert = ({ onClose }) => {
//   return (
//     <div className="fixed z-50 top-1/4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-300 rounded-md px-4 py-3 shadow-lg">
//       <div className="flex justify-between items-center">
//         <div className="flex">
//           <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
//           <span className="text-green-500 font-semibold">Success!</span>
//         </div>
//         <div className="cursor-pointer" onClick={onClose}>
//           <FontAwesomeIcon icon={faTimesCircle} className="text-gray-500" />
//         </div>
//       </div>
//       <p className="text-sm mt-1 text-gray-600">Form has been submitted successfully.</p>
//     </div>
//   );
// };

// const ShowFailedAlert = ({ onClose }) => {
//   return (
//     <div className="fixed z-50 top-1/4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-300 rounded-md px-4 py-3 shadow-lg">
//       <div className="flex justify-between items-center">
//         <div className="flex">
//           <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 mr-2" />
//           <span className="text-red-500 font-semibold">Failed!</span>
//         </div>
//         <div className="cursor-pointer" onClick={onClose}>
//           <FontAwesomeIcon icon={faTimesCircle} className="text-gray-500" />
//         </div>
//       </div>
//       <p className="text-sm mt-1 text-gray-600">Form submission has failed.</p>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import ShowSuccessAlert from './ShowSuccessAlert';
// import ShowFailedAlert from './ShowFailedAlert';

// const MyForm = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showFailed, setShowFailed] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm');
//       console.log('SUCCESS!', response.status, response.text);
//       setShowSuccess(true);
//     } catch (error) {
//       console.log('FAILED...', error);
//       setShowFailed(true);
//     }
//   };

//   const handleSuccessClose = () => {
//     setShowSuccess(false);
//   };

//   const handleFailedClose = () => {
//     setShowFailed(false);
//   };

//   return (
//     <div>
//       {showSuccess && <ShowSuccessAlert onClose={handleSuccessClose} />}
//       {showFailed && <ShowFailedAlert onClose={handleFailedClose} />}
//       <form onSubmit={sendEmail} id="myForm">
//         {/* form fields go here */}
//       </form>
//     </div>
//   );
// };

// export default MyForm;
