import styled from 'styled-components'
import { flex } from '@/styles/vars'

import Sign from '@/components/Sign'

export const Page = styled.div`
  ${flex.center}
  height: 100vh; 

  background-image: url('/assets/backgrounds/login/login.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default function PageSign() {
  

  return(
    <Page>
      <Sign />
    </Page>
  )
}