import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Import stock images
const heroImage = 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800';
const service1Image = 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=400';
const service2Image = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400';
const service3Image = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <Container>
          <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Expert Physical Therapy Care
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
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box className="service-card">
                <Box
                  component="img"
                  src={service1Image}
                  alt="Physical Therapy"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Physical Therapy
                </Typography>
                <Typography>
                  Comprehensive physical therapy services to help you recover from injury and improve mobility.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="service-card">
                <Box
                  component="img"
                  src={service2Image}
                  alt="Sports Rehabilitation"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Sports Rehabilitation
                </Typography>
                <Typography>
                  Specialized programs for athletes to return to their sport safely and perform at their best.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="service-card">
                <Box
                  component="img"
                  src={service3Image}
                  alt="Pain Management"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Pain Management
                </Typography>
                <Typography>
                  Evidence-based treatments to reduce pain and improve your quality of life.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="why-choose-section">
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
              <Box className="feature-card">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400"
                  alt="Modern Facility"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Modern Facility
                </Typography>
                <Typography>
                  State-of-the-art equipment and comfortable treatment spaces for optimal recovery.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="feature-card">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=400"
                  alt="Proven Results"
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  Proven Results
                </Typography>
                <Typography>
                  Track record of successful outcomes and satisfied patients.
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