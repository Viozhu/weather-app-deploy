import React, {useState} from 'react';
import style from './cards.module.css'
export default function SearchBar({onSearch}) {

  const [city,setCity] = useState('');
    return (
    <form onSubmit={(e) => {
      setCity('');
      e.preventDefault();
      onSearch(city);
      
    }}>
  <div className={style.searchbox}>
    <input  type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    
    <input className={style.search} type="submit" value="Buscar" />
    </div></form>
     )
};

