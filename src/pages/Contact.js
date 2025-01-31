import React, { useState, useRef } from 'react';
import { Container, Grid, Typography, Box, TextField, Button, Alert, Snackbar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // You'll need to replace this with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setShowConfirmation(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <section className="page-header">
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Get in touch with our team of physical therapy experts
          </Typography>
        </Container>
      </section>

      <section className="contact-section">
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography variant="body1" paragraph>
                Have questions about our services? Ready to schedule an appointment? 
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
              <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      variant="outlined"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    351 Cypress Creek Road<br />
                    #203<br />
                    Cedar Park, TX 78613
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    (216) 714-3271
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    admin@propelpts.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTimeIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Hours of Operation
                    </Typography>
                    <Typography>
                      Monday: 8:00 AM - 5:00 PM<br />
                      Tuesday - Friday: 7:00 AM - 5:30 PM<br />
                      Saturday - Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Snackbar
        open={showConfirmation}
        autoHideDuration={6000}
        onClose={handleCloseConfirmation}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseConfirmation} severity="success" sx={{ width: '100%' }}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact; 