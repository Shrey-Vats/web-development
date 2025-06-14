
const PostComponents =({username, day, Time, Content, image, profileImage})=>{
    return (
      <div className="rounded-md w-[400px] h-auto bg-[#dedede] px-4 py-2">
        <div className="flex align-center gab-5 mb-4 h">
          <img
            src={profileImage}
            className="w-[50px] object-cover h-[50px] rounded-full flex align-center mt-3 mr-4"
          />

          <div>
            <h4 className="font-bold text-lg">{username}</h4>
            <p className="text-gray-500">{day}</p>
            <p className="text-gray-500">{Time}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-800 text-lg">{Content}</p>
        </div>

        <img
          src={image}
          className="h-[40%] w-[100%] object-cover mt-5"
        />

        <div></div>
      </div>
    );
}

export default PostComponents;