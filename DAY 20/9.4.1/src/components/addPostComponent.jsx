import AddPostScreenComponent from "./AddPostScreenComponent"; 

const AddPostComponent = () =>{
    return (
      <div className="bg-white rounded-[7px] px-4 py-2 m-[20px] border-[1px] border-gray-200 w-[40%]">
        <div className="flex ">
          <img
            src="https://cdn-icons-png.flaticon.com/256/3135/3135823.png"
            className="h-[50px]"
          />
          <div className="w-[100%] border-[1px] border-solid border-black rounded-[30px] bg-gray-100 ml-[10px] px-[8px] py-[4px] flex items-center font-bold text-sm cursor-pointer" onClick={AddPostScreenComponent}>
            {" "}
            SHREY VATS
          </div>    
        </div>

        <div className="flex px-[10px] py-[5px] mt-[10px] grid grid-cols-3 gap-[10px]">
          <div className="flex gap-[5px] hover:bg-gray-100 cursor-pointer rounded-[5px] px-[10px] py-[5px]">
            <img
              src="https://www.freeiconspng.com/thumbs/video-icon/video-icon-1.png"
              className="w-[25px]"
            />
            <p>video</p>
          </div>
          <div className="flex gap-[5px] hover:bg-gray-100 cursor-pointer rounded-[5px] px-[10px] py-[5px]">
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png"
              className="w-[25px]"
            />
            <p>Photo</p>
          </div>
          <div className="flex gap-[5px] hover:bg-gray-100 cursor-pointer rounded-[5px] px-[10px] py-[5px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1643/1643231.png"
              className="w-[25px]"
            />
            <p>write article</p>
          </div>
        </div>
      </div>
    );
}

export default AddPostComponent;