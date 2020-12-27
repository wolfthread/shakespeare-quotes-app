import styled from 'styled-components';
import { deviceSize } from '../../media-queries/media-queries';
// import bckImg from '../../img/background/1.jpg';
import BackgroundImages from '../background-images/BackgroundImages';
import parchmentImg from '../../img/parchment.png';

export const BackgroundImage = styled.div`
  position: relative;
  background: #fff;
  height: 100%;
  margin: 0;

  &:after {
    content: '';
    opacity: 0.8;
    background: rgb(26, 31, 41)
      url(${BackgroundImages[
        Math.floor(Math.random() * BackgroundImages.length)
      ]})
      no-repeat;
    background-blend-mode: luminosity;
    background-size: cover;
    height: 800px;
    top: 25px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const Brand = styled.h1`
  font-family: 'MedievalSharp', cursive;
  color: #004d66;

  @media ${deviceSize.mbLg} {
    font-size: 1.5rem;
  }

  @media ${deviceSize.tab} {
    font-size: 1.5rem;
  }

  @media ${deviceSize.md} {
    font-size: 2rem;
    flex-direction: row;
  }

  @media ${deviceSize.sm} {
    font-size: 1rem;
    flex-direction: row;
  }

  @media ${deviceSize.lg} {
    font-size: 2rem;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  background-color: #004d66;
  border-radius: 5px;
  border: none;
  color: #ccf2ff;
  opacity: 0.9;
  padding: 10px;
  transition: 0.4s all ease-out;

  &:hover {
    opacity: 1;
    color: #fff;
    background-color: #007399;
    font-size: 1.1rem;
    line-height: 2rem;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  z-index: 2;

  @media ${deviceSize.mbLg} {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  @media ${deviceSize.tab} {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${deviceSize.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
  }

  @media ${deviceSize.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
  }
`;

export const Icon = styled.i`
  font-style: normal;

  &:hover {
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const SocialLink = styled.a`
  font-style: normal;
  text-decoration: none;
  color: #000;
  opacity: 0.7;

  &:hover {
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 0.9rem;
  color: #004d66;
  padding: 0;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.7s all ease-out;

  &:hover {
    background-color: #004d66;
    color: #ccf2ff;
    border-radius: 5px;
  }
`;

export const Quote = styled.div`
  margin: 40px;
  text-align: center;
  line-height: 1.5rem;

  @media ${deviceSize.sm} {
    h2 {
      font-size: 1.5rem;
    }
    ,
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const Sheet = styled.div`
  background-image: url(${parchmentImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-item: center;
  width: 80%;
  margin: auto;
  margin-top: 25px;
  border-radius: 20px;
  opacity: 0.8;

  @media ${deviceSize.mbLg} {
    width: 75%;
    font-size: 0.8rem;
  }

  @media ${deviceSize.tab} {
    width: 75%;
    font-size: 0.8rem;
  }

  @media ${deviceSize.md} {
    width: 75%;
    font-size: 1rem;
  }

  @media ${deviceSize.lg} {
    max-width: 60%;
    font-size: 1rem;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 40px;

  @media ${deviceSize.sm} {
    font-size: 0.8rem;
    justify-content: space-around;
  }

  @media ${deviceSize.mbLg} {
    font-size: 0.8rem;
    justify-content: space-around;
  }

  @media ${deviceSize.tab} {
    font-size: 0.8rem;
    justify-content: space-around;
  }

  @media ${deviceSize.md} {
    flex-direction: row;
    justify-content: space-around;
    font-size: 1rem;
  }

  @media ${deviceSize.lg} {
    flex-direction: row;
    justify-content: space-around;
    font-size: 1rem;
  }
`;
