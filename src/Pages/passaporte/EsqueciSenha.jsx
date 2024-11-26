import React from 'react';
import {ContainerLogin, Cabecalho, ConteudoPrincipal, CaixaLogin, TituloLogin, FooterBranco,
    GrupoInput, IconeWrapper, Input, LinkEstilizadoUnderline, BotaoLogin, ContainerLinks
} from './Login';
import { VscMail, VscKey } from "react-icons/vsc";



export function FormularioEsqueciSenha() {
    return (
      <form>
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

        <GrupoInput>
          <IconeWrapper>
            <VscKey size={20} />
          </IconeWrapper>
          <Input 
            type="password"
            placeholder="Confirme sua senha"
          />
        </GrupoInput>
  
        <div><LinkEstilizadoUnderline to="/"><BotaoLogin>Continuar</BotaoLogin></LinkEstilizadoUnderline></div>
  
        <ContainerLinks>
          <LinkEstilizadoUnderline to="/cadastro">Cadastre-se</LinkEstilizadoUnderline>
          <LinkEstilizadoUnderline to="/login">Login</LinkEstilizadoUnderline>
        </ContainerLinks>
      </form>
    );
  }


export default function EsqueciSenha() {
    return (
      <ContainerLogin>
        <Cabecalho />
        <ConteudoPrincipal>
          <CaixaLogin>
            <TituloLogin>Trocar Senha</TituloLogin>
            <FormularioEsqueciSenha />
          </CaixaLogin>
        </ConteudoPrincipal>
        <FooterBranco />
      </ContainerLogin>
    );
  }







