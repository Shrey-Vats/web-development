import { useState } from 'react'
import PostComponents from './components/PostComponents'

import AddPostComponents from './components/AddPostComponents'
import Navbar from './components/navbar';

const ProfileComponent = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center align-center gap-10">
      <div className="flex justify-center align-center">
        <PostComponents
          username={"Shrey Vats"}
          day={"15 JULY 2025"}
          Time={"12min"}
          Content={"hi guys! what is your favrioat song during coding @@coding"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB77OixuC9YCh2cvmNbU-pBIKznjmg4fRdHA&s"
          }
          profileImage={
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
        />
      </div>
      <div className="flex justify-center align-center">
        <PostComponents
          username={"Raju mistari"}
          day={"promotion"}
          Content={
            "Welcome to this new erro of world where everyone become selfish and greedy. it is dark truth. people run after money."
          }
          image={
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_570/https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society-1024x570.jpg"
          }
          profileImage={
            "https://cdn-icons-png.flaticon.com/512/5390/5390264.png"
          }
        />
      </div>
    </div>
  );
};

const App = ()=>{

  return (
    <div>
      <Navbar />
      <AddPostComponents />
      <ProfileComponent />
    </div>
  );
}

const addTest =()=>{
    const [visible, setVisible] = useState(true);

    return (
      <div>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            noooo
          </button>
          {visible && <p>hlo donecd </p>}
      </div>
    );
}

export default App
