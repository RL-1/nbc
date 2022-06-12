import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface InputsType {
    value: string
    handleChange: (e: string) => void
    type: 'text' | 'password'
}
export const Inputs: React.FC<InputsType> = (props: InputsType) => {
  const { value, handleChange, type } = props
  return (
    <Box sx={{ '& > :not(style)': { m: '8px 0', width:'100%' } }}>
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          type={type}
        />
      </FormControl>
    </Box>
  );
}