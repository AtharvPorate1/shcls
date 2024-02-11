const BookAppt = () => {
  return (
    <div className='  rounded-xl border bg-white '>
      <div className=' flex  mt-6 gap-10'>
      <div className=' ml-0 '>
        <img src="hospital.jpg" alt="hospital" height={600} width={300} className='object-cover h-[300px] w-[400px]' />
      </div>
      <div className='flex flex-col font-WorkSans font-medium text-2xl gap-5'>
      <div>Dr Sawant Clinic Mother & Child Care</div>
      <div>Contact: 9845422145 </div>
      <div>Specialized For: Mother & Child Care</div>
      <div>Ratings: 5⭐</div>
      </div>
      </div>
      {/* <div className='flex flex-col m-4 font-WorkSans font-medium text-xl gap-5'>
          <h1>Address: nehru nagar, Pimpri Pune</h1>
      </div> */}
    </div>
  );
}

export default BookAppt;


// return (
//   <div className=" bg-[#55a05a] overflow-hidden">
//       <Navbar/>
//       <div className="bg-[#ffffff] rounded-3xl m-5 p-8 px-8 ">
//           <div className="flex justify-center flex-col items-center">
//           <h1 className=" font-WorkSans text-4xl font-medium">Diagnosis</h1>
//           <Searchbar/>
//           </div>
//           {/* {response} */}
//           <div className="flex gap-2 mt-10 mb-5">
//               <h1 className=" font-WorkSans text-3xl font-medium">Diagnostic Result :</h1>
//               <h1 className=" font-WorkSans text-3xl font-medium">Maleria</h1>
//           </div>
//           <hr></hr>
//           <div className="flex justify-between">
//               <h1 className=" font-WorkSans text-2xl font-medium">Recommended Hospitals</h1>
//           </div>
//           <Card/>
//           <Card/>
//           <Card/>
//           <Card/>
//       </div>
//   </div>

// );
// }

// export default page;