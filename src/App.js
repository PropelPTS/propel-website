import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, AppBar, Container, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import theme from './theme';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar position="static" elevation={0}>
            <Container>
              <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '0.5rem 0', md: 0 } }}>
                <Typography variant="h6" component="div">
                  <Link to="/" className="logo-link">
                    <Box
                      component="img"
                      src={logo}
                      alt="Propel PT Logo"
                      sx={{
                        height: { xs: '100px', md: '160px' },
                        width: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                        objectPosition: 'left center',
                        margin: { xs: '-15px 0', md: '-30px 0' },
                        transform: { xs: 'scale(1)', md: 'scale(1.2)' },
                        transformOrigin: 'left center'
                      }}
                    />
                  </Link>
                </Typography>

                {isMobile ? (
                  <>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMobileMenuOpen}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      anchorEl={mobileMenuAnchor}
                      open={Boolean(mobileMenuAnchor)}
                      onClose={handleMobileMenuClose}
                      sx={{
                        '& .MuiPaper-root': {
                          width: '100%',
                          maxWidth: '100%',
                          left: '0 !important',
                          right: '0',
                          marginTop: '0.5rem'
                        }
                      }}
                    >
                      <MenuItem onClick={handleMobileMenuClose} component={Link} to="/">
                        Home
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose} component={Link} to="/about">
                        About Us
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose} component={Link} to="/services">
                        Services
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose} component={Link} to="/contact">
                        Contact
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About Us</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                  </Box>
                )}
              </Toolbar>
            </Container>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="footer">
            <Container sx={{ py: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box
                    component="img"
                    src={logo}
                    alt="Propel PT Logo"
                    sx={{
                      height: '100px',
                      width: 'auto',
                      display: 'block',
                      mb: 2,
                      objectFit: 'contain',
                      objectPosition: 'left center',
                      transform: 'scale(1.2)',
                      transformOrigin: 'left center',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                  <Typography variant="body2">
                    Expert physical therapy care for your recovery and wellness journey.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Contact
                  </Typography>
                  <Typography variant="body2">
                    351 Cypress Creek Road, #203<br />
                    Cedar Park, TX 78613<br />
                    Phone: (216) 714-3271<br />
                    Email: admin@propelpts.com
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Hours
                  </Typography>
                  <Typography variant="body2">
                    Monday: 8:00 AM - 5:00 PM<br />
                    Tuesday - Friday: 7:00 AM - 5:30 PM<br />
                    Saturday - Sunday: Closed
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary" align="center">
                  © {new Date().getFullYear()} Propel PT. All rights reserved.
                </Typography>
              </Box>
            </Container>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
