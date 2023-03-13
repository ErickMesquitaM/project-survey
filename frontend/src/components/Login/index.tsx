import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Checkbox } from "@mui/material";

import { BoardOptions } from "./index.styles"

import UIBoard from "@/UI/login-sign/Board";
import UIInput from "@/UI/login-sign/Input";

import { MdOutlineMail, MdEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';



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

  }, []);



  function validate() {
    // validate datas
  }

  function redirectSign(){
    const link = document.getElementById('refLink');

    if(link) link.click();
  };


  return(
    <UIBoard primary='Entrar' secondary='Criar Conta' funcPri={ validate } funcSec={ redirectSign }>
      <Link id="refLink" to="/sign" style={{display: "none"}} />

      <UIInput
       id='email'
       placeholder="email@domain.com"
       label='Email'
       Icons={{ 
        line: MdOutlineMail,
        fill: MdEmail
        }}
       isPwd={false}
       func={() => {}}
      />

      <UIInput
       id='pwd'
       placeholder="********"
       label='Senha'
       Icons={{ 
        line: RiLockPasswordLine,
        fill: RiLockPasswordFill
        }}
       isPwd={true}
       func={() => {}}
      />
      
      <BoardOptions>
        <div>
          <Checkbox inputProps={{ 'aria-label': 'Checkbox demo', 'id': 'rememberMe' }} defaultChecked />
          <label htmlFor="rememberMe">lembrar de mim</label>
        </div>

        <Link to="/" className="forgot">esqueci a senha</Link>
      </BoardOptions>

    </UIBoard>
  )
}