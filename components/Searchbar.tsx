const Searchbar = () => {
    return (
        <div className=" m-5 flex flex-col justify-center items-center">
          <div className="relative mt-1 w-[500px]">
              <input type="text" className="w-full pl-3 pr-10 py-2 border-2  hover:border-[#55a05a] rounded-2xl border-gray-300" placeholder="Search..."/>
              <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-[#55a05a] focus:outline-none hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#55a05a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
          </div>
        </div>
    );
}

export default Searchbar;