'use client'
// MobileMenu.tsx
import { FC } from 'react';
import Link from 'next/link';
import { Box, Drawer, List, ListItemButton } from '@mui/material';
import { navLinks } from '@/app/enums/navLinks';
import ThemeSwitch from '../ThemeSwitch';


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {

  return(
  <Drawer anchor="right" open={isOpen} onClose={onClose}>
    <Box className="h-full bg-white dark:bg-yellow-500 " 
      width={150}
      padding={2}
    >
      <List>
        {navLinks.map(({ id, path, text }) => (
          <Link key={id} href={path}  
          shallow={true}>
             <ListItemButton className=' text-yellow-600 dark:text-slate-700' onClick={onClose}  >
              {text}
            </ListItemButton>
          </Link>
        ))}
       
      </List>
      <ThemeSwitch />

    </Box>
  </Drawer>
)};

export default MobileMenu;
