// src/App.jsx

import { useState } from 'react';
import './App.css';
import { getSpells } from "./servicios/spells.js";
import { SpellsCard } from './spellscard.jsx';

function App() {
  const initialSpells = getSpells().slice(0, 5);
  const [spells, setSpells] = useState(initialSpells);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const spellTypes = ["magia", "religion", "tribu", "aldea", "magia"];

  const handleSelectSpell = (spellObject) => {
    setSelectedSpell(spellObject);
  };

  const handleReturnToList = () => {
    setSelectedSpell(null);
  };

  return (
    <div className="App">
     {!selectedSpell && (
      <header>
        <h1>Libro de Hechizos</h1>
      </header>
    )}
            
      <main>
        {selectedSpell ? (
          <div className="detail-view">
            <SpellsCard
              key={selectedSpell.id}
              // --- CORRECCIÓN: Faltaba el 'name' aquí ---
              name={selectedSpell.name}
              type={spellTypes[spells.findIndex(s => s.id === selectedSpell.id)]}
              level={selectedSpell.level}
              range={selectedSpell.range}
              actionType={selectedSpell.action}
              onSelectSpell={() => {}}
            />
            <button className="back-button" onClick={handleReturnToList}>
              Volver a la Lista
            </button>
          </div>
        ) : (
          <div className="spells-container">
            {spells.map((spell, index) => (
              <SpellsCard
                key={spell.id}
                name={spell.name}
                type={spellTypes[index]}
                level={spell.level}
                range={spell.range}
                actionType={spell.action}
                onSelectSpell={() => handleSelectSpell(spell)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;