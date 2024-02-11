"use client"

import axios from "axios";

const sendEmail = async () => {
    
      
  
  const payload = {
    "to": "www.atharvporate0909@gmail.com",
    "subject": "Your Appointment is Confirmed! 🎉",
    "htmlContent": "<p>" + "Your appointment is confirmed with Dr. Sawant" + " on 17th Feb" + " at  2pm" + ". We look forward to seeing you!" + "</p>",

  };

  console.log('Sending email...');
  console.log(payload);
  axios.post('https://confirmation-api.onrender.com/send-email', payload)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response.data);
    });

  // const response = await fetch(apiUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });

//   if (response.ok) {
//     console.log('Email sent successfully!');
//   } else {
//     console.error('Failed to send email:', response.statusText);
//   }
// } catch (error) {
//   console.error('Error sending email:', error);
// }

};



const Appointment = (props) => {
    return (
      <div>
        <div className="bg-white shadow-md rounded-md mb-4 w-[230px] ">
          <h2 className="text-lg font-bold mb-4 align-middle text-center">Appointment Form</h2>
          <div className="mb-3 w-full">
            <label className="block text-[#0a0908] text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="name" type="text" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label className="block text-[#0a0908] text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="email" type="email" placeholder="abc@gmail.com" />
          </div>
          <div className="mb-3">
            <label className="block text-[#0a0908] text-sm font-bold mb-2" htmlFor="phone">
              Phone no
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="phone" type="tel" placeholder="768678678" />
          </div>
          <div className="mb-3">
            <label className="block text-[#0a0908] text-sm font-bold mb-2" htmlFor="datetime">
              Date/Time Preference
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="datetime" type="datetime-local" />
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-[#55a05a] hover:bg-[#55a05a] hover:text-[#fffcf2] px-2 rounded-md" onClick={props.book}>Confirm</button>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Appointment;