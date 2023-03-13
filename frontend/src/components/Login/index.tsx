import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";

import { BoardInput, BoardOptions, BoardButtons, ListOptions } from "./index.styles"

import UIboardInputsLogin from "../../UI/login/BoardInputs";

import { MdOutlineMail, MdEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import { useEffect } from "react";


export default function Login() {

  useEffect(() => {
    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');

    email?.addEventListener('keypress', e => {
      if(e.code === 'Enter') pwd?.focus();
    } )

    pwd?.addEventListener('keypress', e => {
      if(e.code === 'Enter') pwd?.blur();
    } )

  }, [])

  return(
    <UIboardInputsLogin>

      <BoardInput>
        <input name="email" id="email" type="text" placeholder="email@domain.com" />
        <label htmlFor="email">Email</label>
        <div className="icon">
          <MdOutlineMail className="line" />
          <MdEmail className="fill" />
        </div>
      </BoardInput>
      
      <BoardInput>
        <input name="pwd" id="pwd" type="text" placeholder="********" />
        <label htmlFor="pwd">Senha</label>
        <div className="icon">
          <RiLockPasswordLine className="line" />
          <RiLockPasswordFill className="fill" />
        </div>
      </BoardInput>

      <BoardOptions>
        <div>
          <Checkbox inputProps={{ 'aria-label': 'Checkbox demo', 'id': 'rememberMe' }} defaultChecked />
          <label htmlFor="rememberMe">lembrar de mim</label>
        </div>

        <Link to="/" className="forgot">esqueci a senha</Link>
      </BoardOptions>
      
      <BoardButtons>
        <button className="login"> <span>Entrar</span> </button>
        <Link to="/" className="sign">Criar Conta</Link>
      </BoardButtons>

      <ListOptions>

        <li>
          <button>
            <img src="/assets/icons/login/google.png" alt="google" />
          </button>
        </li>

        <li>
          <Link to="/">
            <img src="/assets/icons/login/guest.png" alt="guest" />
          </Link>
        </li>

          
      </ListOptions>

    </UIboardInputsLogin>
  )
}