import { useState } from "react";
import PostComponents from "./PostComponents";

const AddPostComponents = () =>{

    const [post, setPost]  = useState([])

      const PostComponent = post.map((post) => (
        <PostComponents
          username={post.username}
          day={post.day}
          Time={post.Time}
          Content={post.Content}
          image={post.image }
          profileImage={post.profileImage}
        />
      ));

      const AddPost =()=>{

        setPost([
          ...post,
          {
            username: "vats",
            day: "15 JULY 2025",
            Time: "12min",
            Content:
              "hi guys! what is your favrioat song during coding @@coding",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB77OixuC9YCh2cvmNbU-pBIKznjmg4fRdHA&s",
            profileImage:
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          },
        ]);
      }

      return (
        <div className="p-4">
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={AddPost}
          >
            Add Post
          </button>

          <div className="flex flex-col items-center gap-6">
            {PostComponent}
          </div>
        </div>
      );
      
}

export default AddPostComponents;