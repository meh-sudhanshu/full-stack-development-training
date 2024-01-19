
import { useState } from "react";
import Overlay from "./components/overlay/Overlay";
import HomePage from "./pages/HomePage";



function App() {
 
  const [isOverlayVisible,setIsOverlayVisible] = useState(false)

  const toggleOverlayState = (state)=>{
    setIsOverlayVisible(state)
  }


  return (
      <div className="App">
          <HomePage toggleOverlayState={toggleOverlayState}/>
          {isOverlayVisible === true && <Overlay/>}
      </div>
  );
}

export default App;
