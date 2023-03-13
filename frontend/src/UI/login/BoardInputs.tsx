import { Board, Logo } from "./BoardInputs.styles"


export default function UIboardInputsLogin( {children}: {children: React.ReactNode } ) {

  return(
    <Board>
      <Logo src="/assets/logo/logo.png" alt="LOGO" />
      { children }
    </Board>
  )
}