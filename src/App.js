import React, { useState } from 'react';
import './App.css';
import Ship from './components/Ship';

const App = () => {
  const [selectedShip, setSelectedShip] = useState(null);

  const handleShipClick = (shipType) => {
    setSelectedShip({ type: shipType, orientation: 'horizontal' });
  };

  const handleSquareClick = (row, col) => {
    console.log(`Clic en la casilla: ${row}-${col}, Barco seleccionado: `, selectedShip);
  };

  return (
    <div className="app-container">
      <h1>Batalla Naval</h1>
      <div className="board-container">
        <div className="board">
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <div key={rowIndex} className="row">
              {Array.from({ length: 10 }, (_, colIndex) => (
                <div
                  key={colIndex}
                  className="square"
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="ships-container">
        <h2>Barcos</h2>
        <Ship
          length={4}
          color="gray"
          orientation={selectedShip?.orientation}
          onClick={() => handleShipClick('portaaviones')}
        />
        <Ship
          length={4}
          color="gray"
          orientation={selectedShip?.orientation}
          onClick={() => handleShipClick('crucero')}
        />
        <Ship
          length={4}
          color="gray"
          orientation={selectedShip?.orientation}
          onClick={() => handleShipClick('submarino')}
        />
        <Ship
          length={2}
          color="gray"
          orientation={selectedShip?.orientation}
          onClick={() => handleShipClick('lancha torpedera')}
        />
      </div>
    </div>
  );
};

export default App;
