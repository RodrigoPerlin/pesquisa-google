import { TextField, InputAdornment, IconButton } from "@mui/material"
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';

export const Form = ({ functionHandlerChange }: any) => {

    return (
        <form >
            <TextField
                placeholder="Pesquisar no Google"
                variant="outlined"
                fullWidth
                onChange={(e) => functionHandlerChange(e.target.value)}
                sx={{ maxWidth: 600, bgcolor: 'white', borderRadius: 5 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <KeyboardIcon />
                            </IconButton>
                            <IconButton>
                                <MicIcon />
                            </IconButton>
                            <IconButton>
                                <CameraAltIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </form>)
}