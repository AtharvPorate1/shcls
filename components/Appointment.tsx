"use client"
const Appointment = (props) => {
    return (
      <div>
        <div className="bg-white shadow-md rounded-md mb-4 w-[230px] ">
          <h2 className="text-lg font-bold mb-4 align-middle text-center">Appointment Form</h2>
          <div className="mb-3 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone no
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="datetime">
              Date/Time Preference
            </label>
            <input className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="datetime" type="datetime-local" />
          </div>
          <div className="flex justify-center">
            <button className="border border-[#909090] p-1 rounded-md" onClick={props.book}>Confirm</button>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Appointment;