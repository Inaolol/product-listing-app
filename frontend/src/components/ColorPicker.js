import React from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, selectedColor, onColorSelect }) => {
  const colorDisplayMap = {
    yellow: { name: 'Yellow Gold', color: '#FFD700' },
    rose: { name: 'Rose Gold', color: '#E8B4A0' },
    white: { name: 'White Gold', color: '#F5F5F5' }
  };

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: colorDisplayMap[color]?.color || '#ccc' }}
          onClick={() => onColorSelect(color)}
          title={colorDisplayMap[color]?.name || color}
          aria-label={`Select ${colorDisplayMap[color]?.name || color}`}
        >
          {selectedColor === color && (
            <span className="checkmark">✓</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker; 