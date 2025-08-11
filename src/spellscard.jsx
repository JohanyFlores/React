import styles from './spellscard.module.css';

import magiaIcon from "./assets/icons/classes/bard.png";
import religionIcon from "./assets/icons/classes/cleric.png";
import tribuIcon from "./assets/icons/classes/druid.png";
import aldeaIcon from "./assets/icons/classes/wizard.png";

const iconMap = {
  magia: magiaIcon,
  religion: religionIcon,
  tribu: tribuIcon,
  aldea: aldeaIcon,
};

export function SpellsCard({ name, type, onSelectSpell, level, range, actionType }) { 
  
  return (
    <div className={styles.element} onClick={onSelectSpell}>
      <img
        className={styles.icon}
        src={iconMap[type]}
        alt={`${type} icon`}
      />
      <p className={styles.spellName}>{name}</p>

      {}
      <div className={styles.spellDetails}>
        <p><strong>Nivel:</strong> {level}</p>
        <p><strong>Acción:</strong> {actionType}</p>
        <p><strong>Rango:</strong> {range}</p>
        <p><strong>Tipo:</strong> {type}</p>


      </div>
    </div>
  );
}
export default SpellsCard;