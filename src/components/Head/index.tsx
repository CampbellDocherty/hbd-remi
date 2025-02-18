import { styled } from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-bottom: 32px;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 4px;
  font-size: 20px;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const Head = () => (
  <Header>
    <Title>Happy Birthday Remi!</Title>
    <Subtitle>
      A digital retelling of our trip to Thassos + Samothraki!
    </Subtitle>
    <Text>
      Disclaimer: the media presented here does not represent the current tastes
      of me or Remi and so should not be used as an indication of our current
      morals and standards
    </Text>
  </Header>
);
