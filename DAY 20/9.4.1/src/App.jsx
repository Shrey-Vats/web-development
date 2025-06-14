import Card from "./components/card"
import AddPostComponent from "./components/addPostComponent"
import AddPostScreenComponent from "./components/AddPostScreenComponent";
import ErrorBoundary from "./other/ErrorBoundary";

const App =() =>{

  return (
    <div className="bg-gray-100 h-screen w-screen">
      <ErrorBoundary>
        {/* <Card>
        <AddPostComponent />
      </Card> */}
        <AddPostScreenComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App