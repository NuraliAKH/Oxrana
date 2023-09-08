import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);

  const handleChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArray([...array, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Добавить в массив</button>
      </form>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import React, { useState } from 'react';

function ButtonComponent() {
  const [clickTime, setClickTime] = useState(null);

  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    setClickTime(currentTime);
  };

  return (
    <div>
      <button onClick={handleClick}>Нажми на меня</button>
      {clickTime && <p>Время нажатия: {clickTime}</p>}
    </div>
  );
}

export default ButtonComponent;


