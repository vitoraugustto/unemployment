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

import OlderBackground from "../assets/images/older-background.jpg";
import { COLOR_YELLOW_500 } from "../themes/theme";

const Ubi = () => {
  return (
    <Background
      style={{
        backgroundImage: `url(${OlderBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Padding vertical="50px" horizontal="120px">
        <Title>OLDER PEOPLE</Title>
        <SubTitle
          color={COLOR_YELLOW_500}
          style={{ position: "relative", bottom: "35px" }}
        >
          I'M A HUMAN, JUST LIKE YOU
        </SubTitle>

        <Margin top="20px" />
        <Box width="550px">
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Another recurring
            problem about unemployment, it's the fact that older people have
            more difficult to get a job. Over the years, many professions just
            disappear due de advancement of Technology, millenials had to change
            their mind and improve their skills to fit the requirements of new
            jobs (or the same job, but worked in a different way).
          </Text>
          <Margin top="20px" />
          <Text size="24px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Every day on
            LinkedIn, we can see people between 40 and 60 years old looking for
            replacement on the job market. They RARELY receive a positive
            answer.
          </Text>

          <Margin top="46px" />
          <Text color={COLOR_YELLOW_500} weight="bold" size="28px">
            Do you know how difficult it is?
          </Text>
          <Margin top="16px" />
          <Box width="400px">
            <Link to="/unemployment/thanks">
              <Button hoverColor={COLOR_YELLOW_500} borderColor="white">
                You should know
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
