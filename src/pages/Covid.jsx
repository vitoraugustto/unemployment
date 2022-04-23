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

import CovidBackground from "../assets/images/covid-background.jpg";
import { COLOR_RED_600 } from "../themes/theme";

const Ubi = () => {
  return (
    <Background
      style={{
        backgroundImage: `url(${CovidBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Padding vertical="50px" horizontal="120px">
        <Title>COVID PANDEMIC</Title>
        <SubTitle
          color={COLOR_RED_600}
          style={{ position: "relative", bottom: "35px" }}
        >
          IT NEVER ENDS
        </SubTitle>

        <Margin top="20px" />
        <Box width="550px">
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unemployment in the
            world increased quickly when the pandemic of COVID starts. A lot of
            people lost their jobs during the crisis.
          </Text>
          <Margin top="20px" />
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At the beginning of
            the COVID, homeoffice was practically the unique way to work while
            isolated from the others. With that in mind, jobs that were needed
            to be in person, were strongly disappearing.
          </Text>

          <Margin top="46px" />
          <Text color={COLOR_RED_600} weight="bold" size="28px">
            I'll kill COVID
          </Text>
          <Margin top="16px" />
          <Box width="400px">
            <Link to="/unemployment/older">
              <Button hoverColor={COLOR_RED_600} borderColor="white">
                It's not over
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
