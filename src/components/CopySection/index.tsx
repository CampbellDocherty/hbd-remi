import { styled } from 'styled-components';
import { Copy, copy } from '../../assets/copy';
import { useState } from 'react';

const Section = styled.section`
  margin-left: 16px;
`;

const ElementContainer = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const Joiner = styled.div`
  margin: 0;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
`;

const Element = styled.div`
  margin: 0;
  margin-left: 8px;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.p`
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = ({ copy }: { copy: Copy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, media, children } = copy;
  return (
    <Section key={title}>
      <Title onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? '↓' : '→'}</span> {title}
      </Title>
      {isOpen && (
        <>
          {children.map((child) => (
            <ElementContainer key={child}>
              <Joiner>
                <span style={{ marginBottom: '3px' }}>│</span>
                <span>├</span>
              </Joiner>
              <Element>
                <span>{child}</span>
              </Element>
            </ElementContainer>
          ))}

          <ElementContainer>
            <Joiner>
              <span style={{ marginBottom: '3px' }}>│</span>
              <span>└</span>
            </Joiner>
            <Element>
              <span>Media ({media.length})</span>
            </Element>
          </ElementContainer>
        </>
      )}
    </Section>
  );
};

export const CopySections = () => {
  return (
    <>
      {copy.map((copy) => (
        <Content key={copy.title} copy={copy} />
      ))}
    </>
  );
};
