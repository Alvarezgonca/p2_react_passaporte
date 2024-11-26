import React from 'react';
import {ContainerLogin, Cabecalho, ConteudoPrincipal, CaixaLogin, TituloLogin, FooterBranco,
    GrupoInput, IconeWrapper, Input, LinkEstilizadoUnderline, BotaoLogin, ContainerLinks
} from './Login';
import { VscMail, VscKey } from "react-icons/vsc";
import { HiOutlineUser } from 'react-icons/hi';



export function FormularioCadastro() {
    return (
      <form>
        <GrupoInput>
            <IconeWrapper>
              <HiOutlineUser size={20} />
            </IconeWrapper>
            <Input 
              type="text" 
              placeholder="Digite seu nome"
            />
        </GrupoInput>
        <GrupoInput>
          <IconeWrapper>
            <VscMail size={20} />
          </IconeWrapper>
          <Input 
            type="email" 
            placeholder="Digite seu e-mail"
          />
        </GrupoInput>
  
        <GrupoInput>
          <IconeWrapper>
            <VscKey size={20} />
          </IconeWrapper>
          <Input 
            type="password"
            placeholder="Digite sua senha"
          />
        </GrupoInput>
  
        <div><LinkEstilizadoUnderline to="/"><BotaoLogin>Continuar</BotaoLogin></LinkEstilizadoUnderline></div>
  
        <ContainerLinks>
          <LinkEstilizadoUnderline to="/esqueci-senha">Esqueci minha senha</LinkEstilizadoUnderline>
          <LinkEstilizadoUnderline to="/login">Login</LinkEstilizadoUnderline>
        </ContainerLinks>
      </form>
    );
  }


export default function Cadastro() {
    return (
      <ContainerLogin>
        <Cabecalho />
        <ConteudoPrincipal>
          <CaixaLogin>
            <TituloLogin>Cadastrar</TituloLogin>
            <FormularioCadastro />
          </CaixaLogin>
        </ConteudoPrincipal>
        <FooterBranco />
      </ContainerLogin>
    );
  }







