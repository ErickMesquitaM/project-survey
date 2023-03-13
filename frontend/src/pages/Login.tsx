import styled from 'styled-components'
import { flex } from '../styles/vars'

import Login from '../components/Login'

export const Page = styled.div`
  ${flex.center}
  height: 100vh; 

  background-image: url('/assets/backgrounds/login.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default function PageLogin() {
  

  return(
    <Page>
      <Login />
    </Page>
  )
}