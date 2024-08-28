import Image from "next/image";
import getStripe from '@utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxwidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name= "description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <ToolBar>
          <Typography variant = "h6">Flashcard SaaS</Typography>
          <SignedOut>
            <Button> Login</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButtton />
          </SignedIn>
        </ToolBar>
      </AppBar>
    </Container>
  );
}
