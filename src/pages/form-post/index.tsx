import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Title from "../../components/title";

const FormPost = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:3001/dados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, cpf: cpf }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display:"flex",
        flexDirection:"column",
        gap:5,
        justifyContent:"center"
      }}
    >
 <Title titulo="Formulario 1"/>

      <TextField
        label="Nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <TextField
        label="CPF"
        name="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        inputProps={{ maxLength: 14 }}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormPost;
