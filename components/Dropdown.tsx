const Dropdown = () => {
    return (
      <div>
        <div>
          <div className="relative ">
            <select className="text-xs rounded border-2 border-[#909090] text-gray-600 h-6 w-auto pl-3 pr-7 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Pricing(low-high)</option>
              <option>Pricing(high-low)</option>
              <option>Rating(low-high)</option>
              <option>Rating(high-low)</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dropdown;