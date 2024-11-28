'use client';
import { FC } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from 'next-themes';

const Footer: FC = () => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{   
        py: 3,
      }} className={'bg-secondary dark:bg-dark-secondary'}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-dark)' : 'var(--tw-color-text-default)' }}
            >
              Don Gregorio
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-dark)' : 'var(--tw-color-text-default)' }}
            >
              © 2024 Don Gregorio
              
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-dark)' : 'var(--tw-color-text-default)' }}
            >
             Especialistas en la comercialización de camiones, Semirremolques, acoplados, bateas, araña porta contenedor nuevos y usados
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-dark)' : 'var(--tw-color-text-default)' }}
            >
              Contacto
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-darksec)' : 'var(--tw-color-text-defaultsec)' }}
            >
              Sucursal Central: Arijon 3656, Circunvalación Rosario
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-darksec)' : 'var(--tw-color-text-defaultsec)' }}
            >
              Sucursal A02: Ruta A012 Km 7.2 Piñero, Santa Fe
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-darksec)' : 'var(--tw-color-text-defaultsec)' }}
            >
              Teléfono: 341-6395535
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme === 'dark' ? 'var(--tw-color-text-darksec)' : 'var(--tw-color-text-defaultsec)' }}
            >
              Teléfono: 341-5092573
            </Typography>
           
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
