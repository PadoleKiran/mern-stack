import { useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  // TODO: addQuote function
  function addQuote(){
    if(quote.trim === ""){
      setError("Quote can not be empty!");
    }
    setQuotes([...quotes,quote]);
    setQuote("");
    setError("");
  }
  
  // TODO: deleteQuote function
  function deleteQuote(index){
    const newQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(newQuotes);
  }

  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>Add</button>
      </div>

      {/* Error Message */}
      <p id="error-msg">{/* show error conditionally */}
        {quotes.length === 0 && <p id="empty-text">No quotes added yet.</p>}
      </p>

      {/* Quotes List */}
      
      <div id="quotes-list">
    
        {/* TODO: show empty state */}
        {/* TODO: list of quotes */}
         {quotes.map((message, index) => (
          <div className="quote-card" key={index}>
            <span className="quote-text">{message}</span>
            <button className="delete-btn" onClick={() => deleteQuote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
