const Navbar = () => {
    return (
        <div className=" bg-[#F5F5F5] rounded-bl-2xl rounded-br-2xl flex h-10 items-center shadow-custom">
          <div className="flex items-center w-[20%] ml-10 font-WorkSans font-bold">
            <h1>SHCLS</h1>
          </div>
          <div className="flex justify-end items-center w-[80%] mr-10 gap-10 font-WorkSans font-medium">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Help</span>
          </div>
        </div>
    );
}

export default Navbar;