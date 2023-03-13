import { flex, colors } from '@/styles/vars';
import styled from 'styled-components'


export const Board = styled.div`
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
    background-image: linear-gradient(to bottom, transparent 50%, white 50% );
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
      transition: .2s ease-out;

      &.line{
        opacity: 1;
      }

      &.fill{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

        path{
          color: ${colors.blue}!important;
        }
      }
    }
  }

  input{
    width: 100%;
    padding: 10px 10px 10px 35px;
    border-radius: 10px;
    font-size: 17px;
    border: 2px solid #7c8082;
    box-shadow: 5px 5px 7px #00000022 ;
    color: #000000bb;


    
    &.pwd{
      padding: 10px 35px!important;

      &::placeholder{
        position: relative;
        top: 5px;
        font-size: 20px;
        font-weight: 700;
      }
    }

    &.error{
      padding: 10px 35px;
      border: 2px solid ${colors.error};

      
      ~ label, ~ .icon svg path{
        color: ${colors.error};
      }

      ~ .boardAlert{
        display: flex;
      }
    }

    &:focus{
      outline-color: ${colors.blue};
      color: #000000dd;

      ~ label{
        color: ${colors.blue}!important;
      }

      ~ .icon{
        .line{
          opacity: 0;
        }
        .fill{
          opacity: 1;
        }
      }

      ~ .boardPwd{
        display: flex;

        svg path{
          color: ${colors.blue}!important;
        }
      }

      ~.boardAlert{
        display: none;
      }
    }

    &.visible ~ .boardPwd{

      svg{

        &.visible{
          z-index: 0;
          opacity: 0;
        }

        &.hidden{
          z-index: 1;
          opacity: 1;
        }
      }

    }
  }

  .boardPwd{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    ${flex.center}


    svg{
      font-size: 18px;
      transition: .2s ease-out;
      cursor: pointer;

      path{
        transition: .2s ease-out;
      }

      &.visible{
        position: relative;
        z-index: 1;
        opacity: 1;
      }

      &.hidden{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        opacity: 0;
      }
    }
  }

  .boardAlert{
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    ${flex.center}
    display: none;

    svg{      
      padding: 10px;
      font-size: 37px;
      cursor: pointer;

      &:hover{
        ~p{
          right: 10px;
          top: 5px;
          opacity: 1;
        }
      }

      path{
        color: ${colors.error};
      }
    }

    p{
      position: absolute;
      right: 7px;
      top: 10px;
      transform: translateY(100%);

      white-space: nowrap;
      padding: 2px 10px;
      background: #ffc1c1;
      border: 2px solid #ffadad;
      border-radius: 3px;
      font-size: 12px;
      color: #000000aa;
      opacity: 0;
      transition: .2s ease-out;
    }

    ~.boardPwd{
      display: none;
    }
  }
`