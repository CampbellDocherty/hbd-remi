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
`;

export const Head = () => (
  <Header>
    <Title>Happy Birthday Remi!</Title>
    <Subtitle>
      A digital retelling of our trip to Thassos + Samothraki!
    </Subtitle>
  </Header>
);
