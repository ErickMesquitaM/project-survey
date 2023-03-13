import { Board, Logo, BoardButtons } from "./index.styles"

import UIOtherOptions from "@/UI/login-sign/OtherOptions";


interface Props {
  children: React.ReactNode;
  primary: string;
  secondary: string;
  funcPri: () => void;
  funcSec: () => void;
}


export default function UIBoard( props: Props ) {

  const { children, primary, secondary, funcPri, funcSec } = props;

  return(
    <Board>
      <Logo src="/assets/logo/logo.png" alt="LOGO" />

      { children }

      <BoardButtons>
        <button className="primary" onClick={ funcPri }> <span>{primary}</span> </button>
        <button className="secondary" onClick={ funcSec }> {secondary} </button>
      </BoardButtons>

      <UIOtherOptions />
    </Board>
  )
}