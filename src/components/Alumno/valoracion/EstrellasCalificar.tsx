import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';
type EstrellasCalificarProps = {
  setValoration : React.Dispatch<React.SetStateAction<number>>;
}

export default function EstrellasCalificar({setValoration}:EstrellasCalificarProps) {
  const [value, setValue] = React.useState<number | null>(0);
  useEffect(()=>{
    if(value && value>0){
      setValoration(value);
    }
  },[value])
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large" // Cambiar el tamaño de las estrellas
        sx={{ fontSize: '5rem' }} // Estilo personalizado para el tamaño de las estrellas
      />
    </Box>
  );
}