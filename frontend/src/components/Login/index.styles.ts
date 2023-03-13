import { flex, colors } from './../../styles/vars';
import styled from 'styled-components'


export const BoardInput = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px; 

  label{
    position: absolute;
    top: 0;
    left: 15px;
    transform: translateY(-50%);

    font-size: 14px;
    font-weight: 600;
    color: #595959;
    background-image: linear-gradient(to bottom, ${colors.white} calc(50% + 1px), white calc(50% - 1px));
    padding: 0 10px;
  }

  .icon{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    ${flex.center}

    svg{
      font-size: 18px;

      &.line{
        display: block;
      }
      &.fill{
        display: none;
      }
    }
  }

  input{
    width: 100%;
    padding: 10px 35px;
    border-radius: 10px;
    font-size: 17px;
    border: 2px solid #7c8082;
    box-shadow: 5px 5px 7px #00000022 ;
    
    &#pwd::placeholder{
      position: relative;
      top: 5px;
      font-size: 20px;
      font-weight: 700;
    }

    &:focus{
      outline-color: ${colors.blue};

      ~ label, ~ .icon > svg path{
        color: ${colors.blue}!important;
      }

      ~ .icon>.line{
        display: none;
      }
      ~ .icon>.fill{
        display: block;
      }
    }
  }
`

export const BoardOptions = styled.div`
  ${flex.between}
  width: 100%;
  margin-top: -10px; 

  div{
    ${flex.center}

    span *{
      color: ${colors.blue};
    }

    svg{
      font-size: 20px;
    }
  }
  
  label, a{
    font-size: 15px;
    color: ${colors.black};

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

export const BoardButtons = styled.div`
  ${flex.col}
  gap: 15px;
  width: 100%;

  button, a{
    ${flex.center}
  }

  .login{
    position: relative;
    font-weight: 600;
    padding: 12px;
    border-radius: 7px;
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

  .sign{
    padding: 5px;
    color: ${colors.black};
    transition: .5s;

    &:hover{
      color: ${colors.blue};
      text-decoration: underline;
    }
  }
`

export const ListOptions = styled.ul`
  ${flex.center}
  gap: 30px;
  margin-top: 10px;

  button, a{
    ${flex.center}
    width: 45px;
    height: 45px;
    padding: 10px;
    background: white;
    border-radius: 4px;
    box-shadow: 5px 5px 9px #00000022;
  }
`