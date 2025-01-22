import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

function About() {
  return (
    <div>
      <section className="page-header">
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Dedicated professionals committed to your recovery and wellness
          </Typography>
        </Container>
      </section>

      <section className="team-section">
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Box className="team-member-card" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, p: 4 }}>
                <Box sx={{ flex: { xs: '1', md: '0 0 300px' } }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400"
                    alt="Joshua Lyon, PT, DPT"
                    sx={{ 
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: 2
                    }}
                  />
                </Box>
                <Box sx={{ flex: '1' }}>
                  <Typography variant="h4" gutterBottom>
                    Joshua Lyon
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    PT, DPT
                  </Typography>
                  <Typography paragraph>
                    Joshua is the practice owner of Propel Physical Therapy and brings extensive experience as a clinician, clinic director, and former Director of Physical Therapy for a multi-site, multi-state organization. Over the course of his career, he has cultivated a passion for delivering exceptional patient care while mentoring and empowering fellow therapists to reach their full potential. Now, he has embarked on an endeavor to refine and hone his skills by establishing his own practice. In this journey, Joshua is committed to creating an environment where patients are at the center of care, and physical therapists are equipped to thrive professionally and personally.
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
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At Propel PT, we are dedicated to providing exceptional physical therapy care 
                that empowers our patients to achieve optimal health and wellness. Our team of 
                expert clinicians uses evidence-based treatments and personalized approaches to 
                help you reach your goals.
              </Typography>
              <Typography variant="body1">
                We believe in creating a supportive and motivating environment where patients 
                can heal, strengthen, and return to their active lifestyles with confidence.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
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