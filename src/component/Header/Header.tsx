
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { RootState, useAppSelector } from '../../redux/store';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import styles from './styles.module.css'

export const Header: React.FC = () => {
  const auth = useAppSelector((state: RootState) => state.login.auth)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/'>
              N B C
            </NavLink>
          </Typography>
          {auth ? (
            <NavLink to='/lk'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </NavLink>
          ) : 
            (
                <Typography variant="h6" component="div" className={styles.nav__login}>
                    <NavLink to = '/login' className={styles.login}>
                      Login
                    </NavLink>
                    <NavLink to = '/register' className={styles.login}>
                      Register
                    </NavLink>
                </Typography> 
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}