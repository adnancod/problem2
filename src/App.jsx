import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('index');
    if (index !== dragIndex) {
      const newItems = [...items];
      const [draggedItem] = newItems.splice(dragIndex, 1);
      newItems.splice(index, 0, draggedItem);
      setItems(newItems);
    }
  };

  return (
    <div className="App">
      <h1>Drag and Drop List Reordering</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
