import { styled } from 'styled-components';
import { Copy, copy } from '../../assets/copy';
import { useEffect, useRef, useState } from 'react';

const Section = styled.section`
  margin-left: 16px;
`;

const ElementContainer = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: row;
  margin: 0;
  padding: 0;
  margin-left: 28px;
`;

const Joiner = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Element = styled.div`
  margin: 0;
  margin-left: 8px;
  display: flex;
  align-items: flex-end;
`;

const MediaElement = styled(Element)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.p`
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 12px;
  margin-bottom: 4px;
`;

const audioInstances: Set<HTMLAudioElement> = new Set();

const MediaSection = ({
  song,
  i,
  media,
}: {
  song: { src: string };
  i: number;
  media: { src: string }[];
}) => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioElement.current = new Audio(song.src);
    audioElement.current.accessKey = song.src;
  }, []);

  const onClick = () => {
    if (!isPlaying) {
      audioInstances.forEach((audio: HTMLAudioElement) => audio.pause());
      audioInstances.clear();
      if (audioElement.current) {
        audioInstances.add(audioElement.current);
        audioElement.current.play();
      }
      setIsPlaying(true);
    } else {
      audioElement?.current?.pause();
      if (audioElement.current) {
        audioInstances.delete(audioElement.current);
      }
      setIsPlaying(false);
    }
  };

  return (
    <ElementContainer style={{ marginLeft: '48px' }} key={song.src}>
      <Joiner>
        <span style={{ marginBottom: '3px' }}>│</span>
        <span>{i === media.length - 1 ? '└' : '├'}</span>
      </Joiner>
      <MediaElement onClick={onClick}>
        <span>{song.src.split('/')[3].replaceAll('%20', ' ')}</span>

        <Icon
          src={isPlaying ? 'src/assets/pause.svg' : 'src/assets/play.svg'}
          alt="play button"
        />
      </MediaElement>
    </ElementContainer>
  );
};

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
            <Element style={{ marginBottom: '8px' }}>
              <span>Media ({media.length})</span>
            </Element>
          </ElementContainer>
          {media.map((song, i) => {
            return (
              <MediaSection key={song.src} song={song} i={i} media={media} />
            );
          })}
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
