import { useState } from "react"

const App = () =>{
    const [currentTab, setCurrentTab] = useState("home")
    return (
      <div>
        <button
          onClick={() => setCurrentTab("home")}
          style={{ color: currentTab == "home" ? "red" : "black" }}
        >
          home
        </button>
        <button
          onClick={() => setCurrentTab("notification")}
          style={{ color: currentTab == "notification" ? "red" : "black" }}
        >
          notification
        </button>
        <button
          onClick={() => setCurrentTab("message")}
          style={{ color: currentTab == "message" ? "red" : "black" }}
        >
          message
        </button>
        <button
          onClick={() => setCurrentTab("connect")}
          style={{ color: currentTab == "connect" ? "red" : "black" }}
        >
          connect
        </button>
      </div>
    );
}

export default App