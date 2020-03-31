import styled from '@emotion/styled';
import React from 'react';

const StyledCard = styled.li`
  border: 1px solid;
  border-radius: 0.25rem;
  cursor: pointer;
  :focus-within, :hover {
    box-shadow: 0 0 0 0.25rem;
  }
  :focus-within a:focus {
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  height: 6.5rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 1rem;
  p {
    max-width: 60ch;
  }
  > * {
    text-transform: capitalize;
  }
  > * + * {
    margin-top: 0.75rem;
  }
  :last-child {
    margin-top: auto;
    padding-top: 0.75rem;
  }
`;

const Card = ({ data: { link, image, title, text, author }}) => 
  <StyledCard>
    <a href={link} title={title}>
    <ImageContainer>
      <Image src={image} alt={title} />
    </ImageContainer>
    <TextContainer>
        <h2>{title}</h2>
        <p>{text}</p>
        <small>{author}</small>
    </TextContainer>
    </a>
  </StyledCard>
;

export default Card;