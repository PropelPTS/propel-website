import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import headshot2 from '../assets/images/Headshot2.png';

function About() {
  return (
    <div>
      <section className="page-header">
        <Container>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Meet Our Team
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Dedicated professionals committed to your recovery and wellness
          </Typography>
        </Container>
      </section>

      <section className="team-section">
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box 
                className="team-member-card" 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  gap: { xs: 3, md: 4 }, 
                  p: { xs: 2, md: 4 },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Box sx={{ 
                  width: { xs: '100%', md: '300px' },
                  maxWidth: { xs: '300px', md: '100%' }
                }}>
                  <Box
                    component="img"
                    src={headshot2}
                    alt="Joshua Lyon, PT, DPT"
                    sx={{ 
                      width: '100%',
                      height: { xs: '300px', md: '400px' },
                      objectFit: 'cover',
                      borderRadius: 2
                    }}
                  />
                </Box>
                <Box sx={{ 
                  flex: '1',
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.125rem' }
                    }}
                  >
                    Joshua Lyon
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    PT, DPT - Owner & Physical Therapist
                  </Typography>
                  <Typography paragraph>
                    Joshua Lyon is a dedicated physical therapist with extensive experience in orthopedic and sports rehabilitation. He earned his Doctorate in Physical Therapy and has since been committed to providing exceptional care to patients of all ages and abilities.
                  </Typography>
                  <Typography paragraph>
                    With a strong foundation in evidence-based practice and a patient-centered approach, Joshua specializes in treating a wide range of conditions, from sports injuries to chronic pain management. His expertise includes manual therapy, therapeutic exercise, and movement analysis.
                  </Typography>
                  <Typography>
                    Outside the clinic, Joshua enjoys exploring the vibrant outdoor scene in Austin, from hiking trails to local parks. He also has a passion for travel, working out, and volunteering at his local church. When not immersed in these activities, he cherishes quality time with his wife, Kimberly, and their four children.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="mission-section" sx={{ backgroundColor: '#f8f9fa' }}>
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At Propel PT, we are dedicated to providing exceptional physical therapy care 
                that empowers our patients to achieve optimal health and wellness. Our team of 
                expert clinicians uses evidence-based treatments and personalized approaches to 
                help you reach your goals.
              </Typography>
              <Typography variant="body1" sx={{ mb: { xs: 4, md: 0 } }}>
                We believe in creating a supportive and motivating environment where patients 
                can heal, strengthen, and return to their active lifestyles with confidence.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Our Approach
              </Typography>
              <Typography variant="body1" paragraph>
                We take a comprehensive, one-on-one approach to physical therapy. Each 
                treatment plan is customized to address your specific needs and goals, 
                incorporating the latest therapeutic techniques and technologies.
              </Typography>
              <Typography variant="body1">
                Our focus is not just on treating symptoms, but on identifying and 
                addressing the root cause of your condition to prevent future issues 
                and promote long-term health.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default About; 