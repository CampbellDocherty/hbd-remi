import { styled } from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 4px;
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
