import React, { useState, useEffect, useRef} from 'react';
import './style.css';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const allSuggestions = ['Most Popular', 'Hight Rated', 'Newest'];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the selected suggestion as the input value
    setInputValue(suggestion);

    // Clear suggestions
    setSuggestions([]);
    setShowSuggestions(false);
  };
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      // Click occurred outside the input box
      setShowSuggestions(false);
    }
  };
  useEffect(() => {
    // Attach click event listener to the document
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="autocomplete-container" ref={inputRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setShowSuggestions(true)}
      />
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

function AutoBox() {
  return (
    <div className='input-box-auto text-center'>
      <span className='text-sm '>Sort By</span>
      <Autocomplete />
    </div>
  );
}

export default AutoBox;
