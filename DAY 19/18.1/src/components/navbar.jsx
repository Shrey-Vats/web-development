import { useEffect, useState } from "react";

const Navbar = ()=>{
    const [notifications, setNotifications] = useState(0)

    const notification =()=>{
        setNotifications(notifications + 1)
    }
    const home =()=>{

    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setNotifications(notifications + 1)
        }, 5000)

        return () => clearInterval(interval)
    })

    return (
      <div className="w-full bg-slate-50 h-20  flex items-center justify-end">
        <div className="mr-[80px]">
          {notifications !== 0 && (
            <div className=" flex justify-center items-center h-[12px] w-[12px] bg-red-600 text-white rounded-full ml-[25px] text-[10px] font-bold">
              {notifications}
            </div>
          )}
          <img
            src="https://static.thenounproject.com/png/3574480-200.png"
            className="w-[40px]"
            onClick={home}
          />
        </div>
        <div className="mr-[200px]">
          {notifications !== 0 && (
            <div className=" flex justify-center items-center h-[12px] w-[12px] bg-red-600 text-white rounded-full ml-[25px] text-[10px] font-bold">
              {notifications}
            </div>
          )}
          <img
            src="https://icons.veryicon.com/png/o/object/material-design-icons/notifications-1.png"
            className="w-[40px]"
            onClick={notification}
          />
        </div>
      </div>
    );
}

export default Navbar