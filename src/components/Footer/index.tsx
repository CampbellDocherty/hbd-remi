import { styled } from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 12px;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 12px;
  text-align: center;
  width: 70%;
  margin: 0;
  margin-bottom: 8px;
`;

export const Footer = () => (
  <StyledFooter>
    <Text>
      Disclaimer: the media presented here does not represent current tastes of
      me or Remi and so should not be used as an indication of our current
      morals and standards
    </Text>
  </StyledFooter>
);
