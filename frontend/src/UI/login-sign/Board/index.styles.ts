import styled from 'styled-components'
import { colors, flex } from '@/styles/vars';


export const Board = styled.section`
  background-image: url('/assets/backgrounds/login/content.jpg');
  background-size: cover;
  background-position: center;

  ${flex.col}
  align-items: center;
  gap: 20px;

  width: 450px;

  border-radius: 20px;
  box-shadow: 0 0 50px #00000055;
  padding: 40px 60px;
`

export const Logo = styled.img`
  width: 80px;
`



export const BoardButtons = styled.div`
  ${flex.col}
  gap: 15px;
  width: 100%;


  .primary{
    ${flex.center}
    position: relative;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 5px 5px 9px #00000022;
    border: 2px solid ${colors.blue};
    background: white;
    transition: .2s linear;

    span{
      position: relative;
      color: ${colors.blue};
      z-index: 1;
      transition: .2s linear;
    }

    &::before{
      position: absolute;
      top: 0;
      left: 0;

      content: "";
      width: 100%;
      height: 100%;
      background: ${colors.blue};

      transition: transform 0.5s;
      transform-origin: 0 0;
      transition-timing-function: cubic-bezier(0.5,1.6,0.4,0.7);
      transform: scaleX(0);
    }

    &:hover{

      &::before{
        transform: scaleX(1);
      }

      span{
        color: ${colors.white};
      }
    }
  }

  .secondary{
    ${flex.center}
    font-size: 15px;
    padding: 5px;
    color: ${colors.black};
    transition: .5s;

    &:hover{
      color: ${colors.blue};
      text-decoration: underline;
    }
  }
`