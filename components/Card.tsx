import Link from "next/link";

const Card = () => {
    return (
      <div className=' flex justify-center border-2 border-[#909090] m-3 rounded-xl pt-4' >
      <div className=" flex border-none p-2 rounded-lg  w-[95%] flex-wrap mb-2 shadow-md ">
        <div className=" w-[20%] ">
          <img src="hospital.png" alt="" className='mr-2 p-2' height={100} width={100}/>
        </div>
        <div className=' w-[33%]'>
          <div className=' mb-3 flex-wrap'>Name</div>
          <div className=' flex-wrap'>Address</div> 
        </div>
            <div className=' w-[33%]'>
              <div className='mb-3'>Ratings</div>
              <div>Price</div>
            </div>
          <div className="flex flex-col justify-center">
            <Link href={'/bookappointment'}>
              <button className="mt-2 border-2 border-[#909090] rounded-md px-1">Book appoitment</button>
            </Link>
          </div>
      </div>
      </div>
    );
  }
  
  export default Card;