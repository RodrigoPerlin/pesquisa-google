import { Alert, Box, Button } from '@mui/material';
import { Footer } from './components/footer';
import { useState } from 'react';
import { Form } from './components/form';
export default function App() {
  const [state, setState] = useState("")
  const [oloco, setOloco] = useState({
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
  })

  function functionHandlerChange(digit: string) {
    setState(digit)
  }

  async function getApi(post: string) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    const datajson = await data.json()
    setOloco(datajson)
  }

  function onEstoucomsorte() {
    if (state.length) {
      console.log(state, "buscar")
      getApi(state)


    } else {
      console.log(state, "antes")

      console.log("nao deu certo")
      setState("")
    }
  }

  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        {/* Doodle */}
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
          alt="logo"
          style={{ maxWidth: '500px', width: '90%', marginBottom: '20px' }}
        />


        <Form functionHandlerChange={functionHandlerChange} />

        {oloco.id ? (
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Alert severity="success">{oloco.id}</Alert>
            <Alert severity="info">{oloco.title}</Alert>
          </Box>) :
          (<div>

          </div>)
        }

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button onClick={() => onEstoucomsorte()} variant="contained" >Pesquisa Google</Button>
          <Button variant="contained">Estou com sorte</Button>
          <Button onClick={() => setOloco({
            "userId": 0,
            "id": 0,
            "title": "",
            "body": ""
          })} variant="contained">Limpar</Button>

        </Box>


      </div>
      <Footer color='red' text='www.ninodene.com' />

    </div>
  );
}
