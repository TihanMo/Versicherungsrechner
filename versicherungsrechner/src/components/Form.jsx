import React, { useState, useEffect } from "react";

export default function Form() {
  const [hausratswert, setHausratswert] = useState();
  const [versicherungssumme, setVersicherungswert] = useState();
  const [schaden, setSchaden] = useState();
  const [ergebnis, setErgebnis] = useState();

  useEffect(() => {
    if (hausratswert && versicherungssumme && schaden) {
      let bezahlterSchaden = (versicherungssumme/hausratswert) * schaden;
      setErgebnis(bezahlterSchaden.toFixed(2));
    }
  }, [hausratswert, versicherungssumme, schaden]);

  const handleSchadenChange = (e) => {
    const newSchaden = parseInt(e.target.value);
    if (newSchaden > versicherungssumme) {
      setSchaden(versicherungssumme);
    } else {
      setSchaden(newSchaden);
    }
  };

  return (
    <div className="form">
      
      <label htmlFor="hausratswert">Hausratswert:</label>
      <input
        className="input-style"
        id="hausratswert"
        type="number"
        min="0"
        value={hausratswert}
        onChange={(e) => setHausratswert(parseInt(e.target.value))}
      />
      <br />

      <label htmlFor="versicherungssumme">Versicherungssumme:</label>
      <input
        className="input-style"
        id="versicherungssumme"
        type="number"
        min="0"
        value={versicherungssumme}
        onChange={(e) => setVersicherungswert(parseInt(e.target.value))}
      />
      <br />

      <label htmlFor="schaden">Schaden:</label>
      <input
        className="input-style"
        id="schaden"
        type="number"
        min="0"
        value={schaden}
        onChange={handleSchadenChange}
      />
      <br />

      <br />
      {ergebnis && <div>Ergebnis: {ergebnis}</div>}
    </div>
  );
}
