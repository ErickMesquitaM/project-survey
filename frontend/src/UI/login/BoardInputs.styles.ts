import styled from 'styled-components'
import { colors, flex } from './../../styles/vars';


export const Board = styled.section`
  ${flex.col}
  align-items: center;
  gap: 20px;

  width: 450px;

  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 0 50px #00000055;
  padding: 40px 60px;
`

export const Logo = styled.img`
  width: 80px;
`