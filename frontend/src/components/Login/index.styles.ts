import { flex, colors } from '@/styles/vars';
import styled from 'styled-components'


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
    font-size: 14px;
    color: ${colors.black};
  }
`