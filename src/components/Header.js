'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../context/AuthContext';
import NextLink from 'next/link';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    router.push('/');
  };

  const menuItems = [
    { text: 'Productos', href: '/sitio/productos' },
    { text: 'Contacto', href: '/sitio/contacto' },
    { text: 'Carrito', href: '/sitio/carrito' },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: '#b71c4a' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/sitio" passHref>
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
            >
              <Image src="/imagenes/logo3.png" alt="Logo Aretes" width={140} height={50} priority />
            </Box>
          </Link>

          {/* Menu desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {menuItems.map(({ text, href }) => (
              <Button
                key={text}
                LinkComponent={NextLink}
                href={href}
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              >
                {text}
              </Button>
            ))}

            {user ? (
              <>
                <Button
                  startIcon={<AccountCircle />}
                  onClick={handleMenuOpen}
                  sx={{ color: '#fff', textTransform: 'none', fontWeight: 600 }}
                >
                  {user}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                LinkComponent={NextLink}
                href="/"
                sx={{
                  bgcolor: '#fff',
                  color: '#fff',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#f48fb1' },
                }}
              >
                Iniciar sesión
              </Button>
            )}
          </Box>

          {/* Menu mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={handleDrawerToggle}
  PaperProps={{ sx: { bgcolor: '#b71c4a', color: '#fff', width: 250, paddingTop: 2 } }}
>
  <List>
    {menuItems.map(({ text, href }) => (
      <ListItem
        key={text}
        component={Link}
        href={href}
        onClick={handleDrawerToggle}
        sx={{ cursor: 'pointer' }}
      >
        <ListItemText primary={text} sx={{ color: '#fff' }} />
      </ListItem>
    ))}

    <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.3)', mt: 2, pt: 2 }}>
      {user ? (
        <>
          <ListItem
            onClick={handleMenuOpen}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
          >
            <AccountCircle />
            <ListItemText primary={user} sx={{ color: '#fff' }} />
          </ListItem>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem
              onClick={() => {
                handleLogout();
                setDrawerOpen(false);
              }}
            >
              Cerrar sesión
            </MenuItem>
          </Menu>
        </>
      ) : (
        <ListItem
          component={Link}
          href="/"
          onClick={handleDrawerToggle}
          sx={{ cursor: 'pointer' }}
        >
          <ListItemText primary="Iniciar sesión" sx={{ color: '#fff' }} />
        </ListItem>
      )}
    </Box>
  </List>
</Drawer>

    </>
  );
}
