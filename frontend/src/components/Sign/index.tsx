import { Link } from "react-router-dom";
import { useState } from "react";

import UIBoard from "@/UI/login-sign/Board";
import UIInput from "@/UI/login-sign/Input";


import { RiUser5Line, RiUser5Fill } from "react-icons/ri";
import { MdOutlineMail, MdEmail } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';


export default function Sign() {

  const [stage, setStage] = useState(0);

  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setpwd] = useState('');
  const [pwd2, setPwd2] = useState('');


  function validate() {
    // validate datas
    setStage(1)
  }

  function validate2() {
    // validate datas
  }


  function redirectLogin(){
    const link = document.getElementById('refLink');

    if(link) link.click();
  };

  function goBack(){
    setStage(0)
  };

  return(
    <UIBoard
     primary={ stage === 0 ? 'Proxímo' : 'Criar Conta'}
     secondary={ stage === 0 ? 'Já tenho conta' : 'Voltar'}
     funcPri={ stage === 0 ? validate : validate2 }
     funcSec={ stage === 0 ? redirectLogin : goBack }>

      <Link id="refLink" to="/login" style={{display: "none"}} />

      {  stage === 0 ?
        <>
          <UIInput
           id='nick'
           placeholder="NickName"
           label='Apelido'
           Icons={{
             line: RiUser5Line,
             fill: RiUser5Fill
           }}
           isPwd={false}
           func={() => {}}
          />


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

        </> : <>
          
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


          <UIInput
           id='pwd2'
           placeholder="********"
           label='Repita a senha'
           Icons={{ 
             line: RiLockPasswordLine,
             fill: RiLockPasswordFill
           }}
           isPwd={true}
           func={() => {}}
          />

        </>
      }


    </UIBoard>
  )
}