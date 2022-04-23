import {
  Background,
  Box,
  Button,
  Chevron,
  Image,
  Link,
  Margin,
  Padding,
  SubTitle,
  Text,
  Title,
} from "../components";

import UnemploymentBackground from "../assets/images/unemployment-background.jpg";
import { COLOR_VIOLET_400 } from "../themes/theme";

const Home = () => {
  return (
    <Background
      style={{
        backgroundImage: `url(${UnemploymentBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Padding vertical="50px" horizontal="120px">
        <Title>UNEMPLOYMENT</Title>
        <SubTitle
          color={COLOR_VIOLET_400}
          style={{ position: "relative", bottom: "35px" }}
        >
          AROUND THE WORLD
        </SubTitle>

        <Margin top="20px" />
        <Box width="550px">
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nowadays, we are
            fighting against one of the worst enemies of the humanity, the
            unemployment. This problem is not happening only here in Brazil.
            Many countries are having problems with it and the tendency, is to
            get worse than now.
          </Text>

          <Margin top="46px" />
          <Text color={COLOR_VIOLET_400} weight="bold" size="28px">
            Why? Let me show you
          </Text>
          <Margin top="16px" />
          <Box width="400px">
            <Link to="/unemployment/tech">
              <Button hoverColor={COLOR_VIOLET_400} borderColor="white">
                I want to know
                <Margin right="16px" />
                <Chevron size="30px" />
              </Button>
            </Link>
          </Box>
        </Box>
      </Padding>
    </Background>
  );
};

export default Home;
