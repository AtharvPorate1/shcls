const BookAppt = () => {
    return (
      <div className='  rounded-xl border w-[60%] bg-white '>
        <div className=' flex'>
        <div className=''>
          <img src="hospital.png" alt="" width={200} height={200} className=' p-4 ' />
        </div>
        <div className='m-4 font-WorkSans font-medium text-2xl'>
        <div>Hospital Details</div>
        <div>Hospital Name</div>
        <div>Contact</div>
        <div>Specialized For</div>
        <div>Reviews and Ratings</div>
        </div>
        </div>
      </div>
    );
  }
  
  export default BookAppt;