import { Children } from "react";
import AddPostComponent from "./addPostComponent";

const Card = ({children}) =>{

    return (
      <div>
        <div className="bg-white rounded-[7px] px-4 py-2 m-[20px]">
          {children}
        </div>
      </div>
    );
}

export default Card