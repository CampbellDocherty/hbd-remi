import { styled } from 'styled-components';
import { copy } from '../../assets/copy';

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
`;

export const CopySection = () => (
  <>
    {copy.map(({ title, children, media }) => (
      <section key={title}>
        <Title>
          <span>&gt;</span> {title}
        </Title>
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
      </section>
    ))}
  </>
);
