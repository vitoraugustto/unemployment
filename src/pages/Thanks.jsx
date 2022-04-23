import {
  Background,
  Box,
  Button,
  Chevron,
  Link,
  Margin,
  SubTitle,
  Title,
} from "../components";

const Thanks = () => {
  return (
    <Background style={{ justifyContent: "center" }}>
      <Box hCenter>
        <Title>Thank's.</Title>
        <SubTitle style={{ position: "relative", bottom: "30px" }}>
          Developed by Vitor Augusto
        </SubTitle>

        <Margin top="35px" />
        <Link to="/unemployment">
          <Button borderColor="white">
            <Chevron position="left" size="30px" />
            <Margin right="12px" /> Back to the main screen
          </Button>
        </Link>
      </Box>
    </Background>
  );
};

export default Thanks;
