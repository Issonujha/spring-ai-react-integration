import React, { useState } from "react";

function ChatComponent() {
    const [prompt, setPrompt] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    const askAI = async () => {
        try {
            const response = await fetch(`http://localhost:8083/ask-ai?prompt=${prompt}`);
            setChatResponse(await response.text());
        } catch (error) {
            console.log("Asking to AI failed try after some time : " + error);
        }
    };

    return (
        <div>
            <h2>Ask to AI</h2>
            <input type="text" value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for AI" />

            <button onClick={askAI}>Ask AI</button>
            <div className="output">
                <p>{chatResponse}</p>
            </div>
        </div>
    );
}

export default ChatComponent;