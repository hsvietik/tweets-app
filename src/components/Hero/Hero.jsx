import { HeroSection, Title, Description } from "./Hero.styled";
export const Hero = () => {
  return (
    <HeroSection>
      <Title>Followers application</Title>
      <Description>The application made as the test task.</Description>
      <Description>
        Tweeters page shows users cards. On button 'Follow' click the number of
        followers increases and the button changes to 'Following'.
      </Description>
      <Description>
        When the page is updated, the final result of the user's actions is
        recorded. That is, if you click on the button and refresh the page, the
        button still remains in the Following state with the appropriate color,
        and the number of followers doesn't decrease to the initial value.
      </Description>
    </HeroSection>
  );
};
