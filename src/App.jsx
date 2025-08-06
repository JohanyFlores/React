
import { useState } from 'react';
import './App.css';
import { getSpells } from "./servicios/spells.js";
import { SpellsCard } from './spellscard.jsx';

function App() {
  const initialSpells = getSpells().slice(0, 5);
  const [spells, setSpells] = useState(initialSpells);
  
  // 1. AÑADIMOS UN NUEVO ESTADO
  // Guardará el objeto del hechizo seleccionado, o 'null' si no hay ninguno.
  const [selectedSpell, setSelectedSpell] = useState(null);

  const spellTypes = ["magia", "religion", "tribu", "aldea", "magia"];

  // 2. MODIFICAMOS LA FUNCIÓN HANDLER
  // Ahora, en lugar de un alert, actualiza el estado 'selectedSpell'.
  // Necesita recibir el objeto completo del hechizo.
  const handleSelectSpell = (spellObject) => {
    setSelectedSpell(spellObject);
  };

  // Función para volver a la lista
  const handleReturnToList = () => {
    setSelectedSpell(null);
  };

  return (
    <div className="App">
      <header>
        {/* El título ahora cambia dinámicamente */}
        <h1>{selectedSpell ? selectedSpell.name : 'Libro de Hechizos'}</h1>
      </header>
      
      <main className="main-content">
        {/* 3. RENDERIZADO CONDICIONAL */}
        {/* Si 'selectedSpell' tiene un objeto, muestra la vista de detalle. */}
        {/* Si no (es 'null'), muestra la lista de siempre. */}

        {selectedSpell ? (
          // --- VISTA DE DETALLE ---
          <div className="detail-view">
            <SpellsCard
              key={selectedSpell.id}
              type={spellTypes[spells.findIndex(s => s.id === selectedSpell.id)]} // Reutilizamos el tipo
              level={selectedSpell.level}
              range={selectedSpell.range}
              actionType={selectedSpell.action}
              
              onSelectSpell={() => {}} // No necesita hacer nada aquí
            />
            <button className="back-button" onClick={handleReturnToList}>
              Volver a la Lista
            </button>
          </div>

        ) : (
          // --- VISTA DE LISTA (lo que ya tenías) ---
          <div className="spells-container">
            {spells.map((spell, index) => (
              <SpellsCard
                key={spell.id}
                name={spell.name}
                type={spellTypes[index]}
                level={spell.level}
                range={spell.range}
                actionType={spell.action}
                // Ahora le pasamos el objeto 'spell' completo a la función
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