import ListaItens from "../../components/listaItems";

const FormPost2 = () => {
  const meusItens = ['Maçã', 'Banana', 'Laranja'];



  
  return (
    <div>
      <h1>Minha Lista de Frutas</h1>
      <ListaItens itens={meusItens} />
    </div>
  );
};
export default FormPost2
