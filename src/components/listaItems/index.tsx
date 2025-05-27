
const ListaItens = ({ itens }) => {
  if (!itens || itens.length === 0) {
    return <p>Nenhum item disponível.</p>;
  }

  return (
    <ul style={{display:"flex", flexDirection:"column", gap:1}}>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListaItens