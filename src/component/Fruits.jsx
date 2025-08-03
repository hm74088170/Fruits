
import React, { useState } from 'react';

const Fruits = () => {
  const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Icedfruit', 'Jackfruit',
    'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange',
    'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tomato'
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 max-w-md mx-auto shadow-lg">
      <input
        type="text"
        placeholder="Search the item...."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ol className="space-y-2">
        {filteredItems.map((item, index) => (
          <li key={index}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={
                  item.toLowerCase() === searchTerm.toLowerCase()
                }
                readOnly
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Fruits;
