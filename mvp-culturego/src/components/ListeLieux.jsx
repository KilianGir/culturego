export default function ListeLieux({ lieux, onVisite }) {
    return (
      <div>
        <h2>Lieux culturels à visiter</h2>
        {lieux.map(lieu => (
          <div key={lieu.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
            <h3>{lieu.nom}</h3>
            <p>{lieu.description}</p>
            <button onClick={() => onVisite(lieu)}>Je suis ici</button>
          </div>
        ))}
      </div>
    );
  }
  