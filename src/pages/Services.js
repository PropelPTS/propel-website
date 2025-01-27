import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import painManagement from '../assets/images/Pain Management.jpg';
import concussion from '../assets/images/Concussion.jpg';
import pelvic2 from '../assets/images/Pelvic2.jpg';

function Services() {
  const services = [
    {
      title: "Physical Therapy",
      description: "Our comprehensive physical therapy services are designed to help you recover from injury, reduce pain, and improve mobility. We use evidence-based techniques and personalized treatment plans.",
      details: ["Post-surgical rehabilitation", "Manual therapy", "Joint mobilization", "Therapeutic exercises"],
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=400"
    },
    {
      title: "Pelvic Floor Therapy",
      description: "Our specialized pelvic floor physical therapy helps address various conditions affecting the pelvic region. We provide compassionate, individualized care in a comfortable and private setting.",
      details: ["Pregnancy & postpartum care", "Incontinence treatment", "Pelvic pain management", "Core strengthening"],
      image: pelvic2
    },
    {
      title: "Sports Rehabilitation",
      description: "Get back in the game with our specialized sports rehabilitation programs. We work with athletes of all levels to restore function, improve performance, and prevent future injuries.",
      details: ["Sport-specific training", "Return-to-play programs", "Performance enhancement", "Injury prevention"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400"
    },
    {
      title: "Massage Therapy",
      description: "Experience the healing benefits of therapeutic massage. Our licensed therapists use various techniques to reduce pain, improve circulation, and promote relaxation.",
      details: ["Deep tissue massage", "Sports massage", "Myofascial release", "Trigger point therapy"],
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=400"
    },
    {
      title: "Vestibular Therapy",
      description: "Regain your balance and confidence with our vestibular rehabilitation programs. We specialize in treating dizziness, vertigo, and balance disorders.",
      details: ["Balance training", "Gaze stabilization", "Positional vertigo treatment", "Fall prevention"],
      image: concussion
    },
    {
      title: "Pain Management",
      description: "Take control of your pain with our comprehensive pain management solutions. We use a combination of techniques to help you find relief and improve function.",
      details: ["Chronic pain treatment", "Joint pain relief", "Back pain management", "Therapeutic modalities"],
      image: painManagement
    }
  ];

  return (
    <div>
      <section className="page-header">
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Comprehensive care for your physical therapy needs
          </Typography>
        </Container>
      </section>

      <section className="services-detail-section">
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box className="service-detail-card" sx={{ height: '100%', p: 4, borderRadius: 2, boxShadow: 1 }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: 2,
                      mb: 3,
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      What we offer:
                    </Typography>
                    <ul>
                      {service.details.map((detail, idx) => (
                        <li key={idx}>
                          <Typography variant="body1">{detail}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="cta-section" sx={{ backgroundColor: '#f8f9fa' }}>
        <Container sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Ready to Start Your Recovery Journey?
          </Typography>
          <Typography variant="h5" paragraph>
            Schedule your initial consultation today and take the first step towards better health.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/contact"
            sx={{ mt: 4 }}
          >
            Book an Appointment
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Services; 