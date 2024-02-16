

const Card = async () => {
  const hospitals = await prisma.hospitals.findMany({
    where: {
      Category: "ENT"
    },
    orderBy: {
      Rating: 'desc' // Sorting by rating in descending order
    },
    take: 5 // Limiting the result to 5 hospitals
  });



  return (
    <>
    {hospitals && <div className="p-4">
      {hospitals.map((hospital) => (
        <div key={hospital.id} className='flex justify-center border-2 border-[#909090] m-3 rounded-xl'>
          <div className="flex border-none p-2 rounded-lg w-[95%] flex-wrap mb-2 shadow-md">
            <div className="w-[15%]">
              <img src={hospital.ThumbNail} alt="" className='mr-2 p-2' height={100} width={100} />
            </div>
            <div className='w-[60%]'>
              <div className='mb-3 flex-wrap'>{hospital.name}</div>
              <div className='flex-wrap'>{hospital.Address}</div>
            </div>
            <div>
              <div className='w-[30%]'>
                <div className='mb-3'>{hospital.Rating}</div>
                <div>{hospital.phone}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>}
    
    
    </>
  );
}

export default Card;

