import styled from 'styled-components'
import { flex, colors } from '@/styles/vars'

export const Board = styled.ul`
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
    border: 2px solid transparent;
    transition: .2s ease-out;

    &:hover{
      box-shadow: 5px 5px 9px 5px #00000022;
      border-color: ${colors.blue}22;
    }
  }
`