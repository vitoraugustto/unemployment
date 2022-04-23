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

import TechBackground from "../assets/images/tech-background.jpg";
import { COLOR_BLUE_300, COLOR_VIOLET_400 } from "../themes/theme";

const Home = () => {
  return (
    <Background
      style={{
        backgroundImage: `url(${TechBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Padding vertical="50px" horizontal="120px">
        <Title>TECHNOLOGY</Title>
        <SubTitle
          color={COLOR_BLUE_300}
          style={{ position: "relative", bottom: "35px" }}
        >
          WHAT TO EXPECT
        </SubTitle>

        <Margin top="20px" />
        <Box width="650px">
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Future is coming
            with 5G, softwares and robots will be able to do almost everything
            that is repetitive. Basic examples: Truck drivers, motoboys,
            salesperson, telemarketing will probably lost their jobs to robots
            programmed by developers and big companies. The unemployment of
            these people, will have an inpact on the economy.
          </Text>
          <Margin top="16px" />
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; What is the right
            thing to do? Keep these jobs and delay the Advancement of Technology
            or strongly invest in robots to have the best performance and save
            money? Both sides have their negative effects and benefits.
          </Text>

          <Margin top="46px" />
          <Text color={COLOR_BLUE_300} weight="bold" size="28px">
            What should we do?
          </Text>
          <Margin top="16px" />
          <Box width="400px">
            <Link to="/unemployment/ubi">
              <Button hoverColor={COLOR_BLUE_300} borderColor="white">
                I don't know
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
