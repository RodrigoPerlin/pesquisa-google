import Typography from "@mui/material/Typography"
interface ITitleProps{
    titulo:string
}

const Title=({titulo}:ITitleProps)=>{
    return(
        <Typography variant="h1" align="center">
        {titulo}
      </Typography>
    )
}
export default Title