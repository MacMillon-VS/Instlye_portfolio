import React,{useState} from "react";
import emailjs from '@emailjs/browser';
import { SuccessAlert, FailedAlert } from "./FormSFMessage";

const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [formData, setFormData] = useState({
        from_name: "",
        email_from: "",
        from_mobile: "",
        from_location: "",
        from_sqft: "",
        message: "",
      });
      const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData(prev=>{
            return{
                ...prev,
                [name]:value
        }
        })
      }

    const sendEmail =async (e)=>{
        
        e.preventDefault();
        
        //serviceId,templateId,e.target,public_key-from email.js
        // emailjs.sendForm('service_f4kkvpt','template_hcvtjo6',e.target,'nk1MQWOQwYinGqpuf');
        try {
            // const response = 
            await emailjs.sendForm(process.env.REACT_APP_CONTACT_SERVICE_ID,process.env.REACT_APP_CONTACT_TEMPLATE_ID,e.target,process.env.REACT_APP_CONTACT_PUBLIC_KEY);
            // console.log('SUCCESS!', response.status, response.text);
            setIsSuccess(true);
          } catch (error) {
            //   console.log('FAILED...', error);
              setIsFailure(true);
          }
        // alert('send');
        
        setFormData({
            from_name: "",
            email_from: "",
            from_mobile: "",
            from_location: "",
            from_sqft: "",
            message: "",
          });
        
    }
    const handleClose = () => {
        setIsSuccess(false);
        setIsFailure(false);
      };
    return (
      <>
      <div className="bg-inherit">
      
     <div className='mx-auto text-center flex flex-col text-white px-8 bg-inherit'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 bg-inherit md:my-8">Contact Us</h1>
        </div>
    <form onSubmit={sendEmail} id='CForm'>
      <div className="max-w-[760px] py-12 mx-auto grid md:grid-cols-2 gap-8 sm:grid-cols-1 px-8 text-white bg-inherit"
        >
      <div className="">
        <label htmlFor="FromName">Name:</label>
          <input onChange={handleChange} type="text" name="from_name" id="fromName" value={formData.from_name}
          className="relative block w-full my-2 appearance-none text-white  bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          placeholder="Enter Your Full Name" required/>
        </div>
        <div className="">
          <label htmlFor="emailFrom">Email:</label>
          <input onChange={handleChange} type="email" name="email_from" id="emailFrom" value={formData.email_from}
          className=" block w-full my-2 appearance-none text-white  bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email@example.com" required/>
        </div>
        <div>
          <label htmlFor="mobileFrom">Phone:</label>
          <input onChange={handleChange} type="text" name="from_mobile" id="mobileFrom" value={formData.from_mobile} 
          className=" block w-full my-2 appearance-none text-white  bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your Mobile Number" required/>
         </div>
<div>
          <label htmlFor="location">Location:</label>
          <input onChange={handleChange} type="text" name="from_location" id="location" value={formData.from_location}
          className=" block w-full my-2 appearance-none text-white  bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your Location"/>
          </div>
        </div>
        <div className="max-w-[760px] mx-auto bg-inherit text-white px-8">
        <label htmlFor="sqft">Construction area in sq.ft:</label>
        <input onChange={handleChange} type="number" min={0} name="from_sqft" id="sqft" value={formData.from_sqft}
        className=" block w-full my-2 appearance-none text-white  bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your area in sqft."/>
          
          <label htmlFor="message">Message:</label>
          <textarea onChange={handleChange} name="message" id="message" rows="4" placeholder="Enter your requirment breifly" value={formData.message}
          className="w-full text-white my-2 bg-gray-900 rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required></textarea>
          {/* <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}}> */}
          
        </div>
        <div className="text-center">
          <button  className='bg-red-500 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white hover:bg-[#00df9a] hover:text-black ease-in-out duration-500  submit__btn'>Send</button>

        </div>
</form>
 {isSuccess && <SuccessAlert onClose={handleClose} />}
      {isFailure && <FailedAlert onClose={handleClose} />}
    </div>



     
      </>
    );
  };
  
  export default ContactForm;
  
  
  
  