import React, { useState } from 'react'

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
    )


    return (
        <div>
            <input
                type="text"
                placeholder='Search the item....'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ol>
                {
                    filteredItems.map((item, index) =>
                        <li key={index}>
                            <label>
                                <span>{item}</span>
                            </label>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

export default Fruits

