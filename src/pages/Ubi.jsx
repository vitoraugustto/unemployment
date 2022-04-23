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

import UbiBackground from "../assets/images/ubi-background.jpg";
import { COLOR_GREEN_500, COLOR_VIOLET_400 } from "../themes/theme";

const Ubi = () => {
  return (
    <Background
      style={{
        backgroundImage: `url(${UbiBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Padding vertical="50px" horizontal="120px">
        <Title>UNIVERSAL BASIC INCOME</Title>
        <SubTitle
          color={COLOR_GREEN_500}
          style={{ position: "relative", bottom: "35px" }}
        >
          LIBERALISM
        </SubTitle>

        <Margin top="20px" />
        <Box width="550px">
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UBI - Universal
            Basic Income is a subject discussed by many people around the world.
            It consists of the government distributing money to all the people
            (WITH NO EXCEPTION) to help them to provide a good life for their
            family. UBI is one of the ways to avoid misery of the unemployed
            workers. But, the idea it's not very accepted.
          </Text>

          <Margin top="46px" />
          <Text color={COLOR_GREEN_500} weight="bold" size="28px">
            All right then, should we give up?
          </Text>
          <Margin top="16px" />
          <Box width="400px">
            <Link to="/unemployment/covid">
              <Button hoverColor={COLOR_GREEN_500} borderColor="white">
                Show me more
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

export default Ubi;
