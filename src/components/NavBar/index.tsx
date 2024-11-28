'use client'
import { FC, useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Container, Grid, IconButton, Toolbar, colors } from '@mui/material';
import { useNavbar } from '@/app/hooks/useNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from '@/app/enums/navLinks';
import MobileMenu from '../MobileMenu';
import ThemeSwitch from '../ThemeSwitch';
import { usePathname } from 'next/navigation';



export const NavBar: FC = () => {
  const { activeSection, navbarBlur } = useNavbar();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Box display={{ xs: "none", md: "flex" }}>
        <AppBar >
          <Toolbar disableGutters className={`navbar-blur ${navbarBlur} bg-secondary dark:bg-dark-secondary`}>
            <Container maxWidth="lg">
              <Grid container alignItems="center" justifyContent="space-between">

                <ThemeSwitch />
                <div className='w-40 xl:w-60'> </div>

                {pathname === '/' || pathname === '/home' ? (
                  <div className='flex bg-primary m-4 p-4 text-sm  text-text-default rounded-md '>
                    <h1>DON GREGORIO</h1>
                  </div>
                ) : (
                  <Link href="/" >
                    <div className='flex bg-primary m-4 p-4 text-sm  text-text-default rounded-md '>

                      <h1>DON GREGORIO</h1>

                    </div>
                  </Link>
                )}

                <div>
                  <nav className="flex gap-4 lg:gap-8">
                    {navLinks.map(({ id, path, text }) => (
                      <Link
                        key={id}
                        href={path}
                        className={`${activeSection === text ? 'active nav-link' : 'nav-link'} text-text-default dark:text-text-dark`}
                        shallow={true}
                      >
                        {text + " "}
                      </Link>
                    ))}
                    <div className={`${activeSection} animation`}></div>
                  </nav>
                </div>


              </Grid>
            </Container>
          </Toolbar>
        </AppBar>

      </Box>
      <Box display={{ xs: "flex", md: "none" }}>
        <AppBar color='default'>
          <Toolbar disableGutters className={`navbar-blur ${navbarBlur}  bg-secondary dark:bg-primary`}>
            <Container maxWidth="lg">
              <Grid container alignItems="center" justifyContent="space-between" gap={2}>

                {pathname === '/' || pathname === '/home' ? (
                  <div className='flex bg-primary m-2 p-4  text-sm  text-text-default dark:border-dark-secondary dark:border-2 rounded-md '>

                    <h1 >
                      DON GREGORIO
                    </h1>
                  </div>
                ) :
                  (
                    <Link href="/" >
                      <div className='flex bg-primary m-2 p-4  text-sm  text-text-default dark:border-dark-secondary dark:border-2 rounded-md '>
                        <h1 >
                          DON GREGORIO
                        </h1>
                      </div>
                    </Link>
                  )}

                <IconButton
                  color="inherit"
                  edge="start"
                  aria-label="Menu"
                  title="Menu"
                  onClick={toggleMobileMenu}
                >
                  <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} />
                </IconButton>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </Box>
    </>
  );
};