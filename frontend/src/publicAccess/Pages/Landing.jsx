// App.js

import { Button, Container, Grid, Typography } from '@mui/material';

import React from 'react';

function Landing() {
  return (
    <Container component="main" maxWidth="md" style={{ textAlign: 'center', marginTop: 40 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Koala Budget
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Your Personal Finance Companion
      </Typography>

      <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 40 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Key Features
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Track expenses and income</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Manage budgets</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Visualize spending patterns</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Set financial goals</Typography>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom>
        Get Started Today!
      </Typography>
      <Typography variant="body1" paragraph>
        Download Koala Budget and take control of your finances.
      </Typography>

      <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
        Download on the App Store
      </Button>
      <Button variant="contained" color="secondary">
        Get it on Google Play
      </Button>

      <Typography variant="body2" color="textSecondary" style={{ marginTop: 40 }}>
        &copy; 2023 Koala Budget. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Landing;
