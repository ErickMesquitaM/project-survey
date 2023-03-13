import { useState } from "react";
import { Board } from "./index.styles";


import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { TbAlertTriangle } from "react-icons/tb";

import { IconType } from "react-icons/lib";



interface Props {
  id: string;
  placeholder: string;
  label: string;
  Icons: {
    line: IconType,
    fill: IconType
  };
  isPwd: boolean;
  func: () => void;
}


export default function UIInput(props: Props) {

  const { id, placeholder, label, Icons, isPwd } = props;

  const [visibility, setVisibility] = useState(false);


  function changeInput() {
    let input = document.getElementById(id);

    if( !input ) return;

    if( input.className.includes('error') ) input.classList.remove('error');

    if( props.func ) props.func()
  }

  return(
    <Board>
      { isPwd ?
        <input name={id} id={id} type={ visibility ? 'text' : 'password' } placeholder={placeholder} className={ visibility ? 'visible pwd' : 'pwd' } onChange={ changeInput }/>
        :
        <input name={id} id={id} type='text' placeholder={placeholder} className="error" onChange={ changeInput }/>
      }
      <label htmlFor={id}> {label} </label>

      <div className="icon">
        <Icons.line className="line" />
        <Icons.fill className="fill" />
      </div>


      <div className="boardAlert">
        <TbAlertTriangle />
        <p>Alguma ddescrição</p>
      </div>

      { isPwd &&

        <div className="boardPwd">
          <HiOutlineEye className="visible" onClick={ () => setVisibility(true) } />
          <HiOutlineEyeOff className="hidden" onClick={ () => setVisibility(false) } />
        </div>
      }

    </Board>
  )
}