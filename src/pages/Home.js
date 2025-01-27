import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import painManagement from '../assets/images/Pain Management.jpg';
import concussion from '../assets/images/Concussion.jpg';
import pelvic2 from '../assets/images/Pelvic2.jpg';
import highlyTrained from '../assets/images/HighlyTrained.jpg';

// Import stock images
const heroImage = 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800';
const service1Image = 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=400';
const service2Image = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400';
const service3Image = painManagement;

function Home() {
  const services = [
    {
      title: "Physical Therapy",
      description: "Comprehensive physical therapy services to help you recover from injury and improve mobility.",
      image: service1Image
    },
    {
      title: "Sports Rehabilitation",
      description: "Specialized programs for athletes to return to their sport safely and perform at their best.",
      image: service2Image
    },
    {
      title: "Pain Management",
      description: "Evidence-based treatments to reduce pain and improve your quality of life.",
      image: service3Image
    },
    {
      title: "Vestibular Therapy",
      description: "Expert treatment for dizziness, vertigo, and balance disorders.",
      image: concussion
    },
    {
      title: "Pelvic Floor Therapy",
      description: "Specialized care for pregnancy, postpartum, and pelvic health conditions.",
      image: pelvic2
    }
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change service every 5 seconds

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div>
      <section className="hero-section">
        <Container>
          <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Expert Physical Therapy Care in Austin
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Personalized treatment plans to help you move better, feel better, and live better.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/contact"
                sx={{ mt: 4 }}
              >
                Schedule an Appointment
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={heroImage}
                alt="Physical therapy session"
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="services-section">
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Our Services
          </Typography>
          <Box sx={{ mt: 4, position: 'relative', minHeight: '400px' }}>
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  opacity: currentServiceIndex === index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  gap: 4,
                  visibility: currentServiceIndex === index ? 'visible' : 'hidden'
                }}
              >
                <Box
                  sx={{
                    flex: '1',
                    width: '100%',
                    maxWidth: { md: '50%' }
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </Box>
                <Box sx={{ flex: '1', textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h4" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="h6" paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/services"
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 1, 
              position: 'absolute', 
              bottom: '-40px', 
              left: 0, 
              right: 0 
            }}>
              {services.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: currentServiceIndex === index ? 'primary.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onClick={() => setCurrentServiceIndex(index)}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </section>

      <section className="why-choose-section">
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box className="feature-card">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400"
                  alt="Expert Care"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Expert Care
                </Typography>
                <Typography>
                  Our experienced therapists provide personalized attention and evidence-based treatment.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="feature-card">
                <Box
                  component="img"
                  src={highlyTrained}
                  alt="Highly Trained"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Highly Trained
                </Typography>
                <Typography>
                  Our physical therapists maintain the highest levels of certification and stay current with the latest treatment techniques.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default Home; 