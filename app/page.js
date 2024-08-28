import Image from "next/image"
import getStripe from "@/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid } from '@mui/material'
import Head from "next/head";

export default function Home() {
  return (
    <Container maxwidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name= "description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard.io
          </Typography>
          <SignedOut>
            <Button color="inherit"> Login</Button>
            <Button color ="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: 'center',
          my: 4,
        }} 
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard.io
        </Typography>
        <Typography varian = 'h5' gutterBottom>
          {' '}
          The easiest way to make flashcards from your text.
        </Typography>
        <Button variant='contained' color= 'primary' sx={{mt: 2}}> 
          Get Started
        </Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creaating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2
            }}
          >
            <Typography variant ="h5" gutterBottom>
              Basic
            </Typography>
            <Typography variant ="h6" gutterBottom>
              $5 / Month
            </Typography>
            <Typography>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant = "contained" color = "primary" sx={{mt: 2}}>
              Choose Basic
            </Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2
            }}
          >
            <Typography variant ="h5" gutterBottom>
              Pro
            </Typography>
            <Typography variant ="h6" gutterBottom>
              $10 / Month
            </Typography>
            <Typography>
              {' '}
              Access to unlimited flashcards and storage, with priority support.
            </Typography>
            <Button variant = "contained" color = "primary" sx={{mt: 2}}>
              Choose Pro
            </Button>
          </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
