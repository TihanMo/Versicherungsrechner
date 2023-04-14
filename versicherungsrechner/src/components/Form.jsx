import React, { useState, useEffect } from "react";

export default function Form() {
  const [hausratswert, setHausratswert] = useState();
  const [versicherungswert, setVersicherungswert] = useState();
  const [schaden, setSchaden] = useState();
  const [ergebnis, setErgebnis] = useState();

  useEffect(() => {
    if (hausratswert && versicherungswert && schaden) {
      let bezahlterSchaden = (schaden * hausratswert) / versicherungswert;
      setErgebnis(bezahlterSchaden.toFixed(2));
    }
  }, [hausratswert, versicherungswert, schaden]);

  return (
    <div>
      <h1>Versicherungsrechner</h1>

      <label htmlFor="hausratswert">Hausratswert:</label>
      <input
        id="hausratswert"
        type="number"
        min="0"
        value={hausratswert}
        onChange={(e) => setHausratswert(parseInt(e.target.value))}
      />
      <br />

      <label htmlFor="versicherungswert">Versicherungswert:</label>
      <input
        id="versicherungswert"
        type="number"
        min="0"
        value={versicherungswert}
        onChange={(e) => setVersicherungswert(parseInt(e.target.value))}
      />
      <br />

      <label htmlFor="schaden">Schaden:</label>
      <input
        id="schaden"
        type="number"
        min="0"
        value={schaden}
        onChange={(e) => setSchaden(parseInt(e.target.value))}
      />
      <br />

      <br />
      {ergebnis && <div>Ergebnis: {ergebnis}</div>}
    </div>
  );
}
