import React, { useState } from 'react';
import ImageGenerator from './Components/ImageGenerator';
import './App.css';
import ChatComponent from './Components/ChatComponent';
import RecipeComponent from './Components/RecipeComponent';

function App() {
  const [activeTab, setActiveTab] = useState("image-generator");

  const onClickTabChange = (tab) => {
    //alert(tab);
    setActiveTab(tab);
  };
  return (
    <div className="App">
      <button className={activeTab === "image-generator" ? "active" : ""} onClick={() => onClickTabChange("image-generator")}>Image Generator</button>
      <button className={activeTab === "chat" ? "active" : ""} onClick={() => onClickTabChange("chat")}>Chat</button>
      <button className={activeTab === "recipe-generator" ? "active" : ""} onClick={() => onClickTabChange("recipe-generator")}>Recipe</button>

      <div>
        {activeTab === "image-generator" && <ImageGenerator />}
        {activeTab === "chat" && <ChatComponent />}
        {activeTab === "recipe-generator" && <RecipeComponent />}
      </div>
    </div>
  );
}

export default App;
