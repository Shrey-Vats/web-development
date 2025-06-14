const AddPostScreenComponent =() =>{

    return (
      <div className="bg-white rounded-[7px] h-[500px] w-[40%]">
        <div className="flex gap-5 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/256/3135/3135823.png"
            className="h-[50px]"
          />
          <p className="ml-[5px] font-lg text-bold">Shrey Vats</p>
        </div>
        <div>
            <input type="text" />
        </div>
        <div></div>
      </div>
    );
}

export default AddPostScreenComponent;