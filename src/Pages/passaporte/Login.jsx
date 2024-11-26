import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscMail, VscKey } from "react-icons/vsc";
import { FooterEsquerdo, FooterDireito, AlinharColumnCentro, ParagrafoGrande, A, TagsFooter, IconesFooter, IconeFooter } from './HomePage';
import { VscTwitter } from "react-icons/vsc";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { LinkEstilizado } from './Perfil';
import { HeaderEsquerda, FlexColumn } from './HomePage';



// Componentes estilizados
export const ContainerLogin = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(146deg, #0025b8,#031a77,#110066,#6f0107,#8a0000);
`;

export const CabecalhoLogin = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const TituloCabecalho = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TituloH2 = styled.h2`
  font-size: 1.3rem;
  margin: 0;
`;

export const ConteudoPrincipal = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const CaixaLogin = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const TituloLogin = styled.h1`
  text-align: center;
  color: #007bff;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const GrupoInput = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

export const IconeWrapper = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-42%);
  color: #6c757d;
`;

export const BotaoLogin = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkEstilizadoUnderline = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 0.9rem;
  display: block;
  text-align: center;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterContainerAqui = styled.div `
padding: 1.6rem;
background-color: #fff;
display: grid;
grid-template-columns: repeat(2, 50%);
color: black;
`




export function Cabecalho() {
  return (
    <CabecalhoLogin>
      <div>
          <LinkEstilizado to="/">
              <HeaderEsquerda>
                  <img src='logoPassaporte.png' alt='Logo' width={70} />
                  <FlexColumn>
                      <TituloH2>Passaporte</TituloH2>
                      <TituloH2>Universitário</TituloH2>
                  </FlexColumn>
              </HeaderEsquerda>
          </LinkEstilizado>
      </div>
    </CabecalhoLogin>
  );
}

export function FormularioLogin() {
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

      <div><LinkEstilizadoUnderline to="/"><BotaoLogin type="submit">Entrar</BotaoLogin></LinkEstilizadoUnderline></div>

      <ContainerLinks>
        <LinkEstilizadoUnderline to="/esqueci-senha">Esqueci minha senha</LinkEstilizadoUnderline>
        <LinkEstilizadoUnderline to="/cadastro">Primeiro acesso? Cadastre-se</LinkEstilizadoUnderline>
      </ContainerLinks>
    </form>
  );
}

export function FooterBranco() {
  return (
    <FooterContainerAqui>
    <FooterEsquerdo>
      <AlinharColumnCentro>
        <ParagrafoGrande>Secretaria de Ciência,</ParagrafoGrande>
        <ParagrafoGrande>Tecnologia e Formação.</ParagrafoGrande>
      </AlinharColumnCentro>
      <img src="logo-footer.png" width={220} alt="Logo da Prefeitura de Maricá"/>
      <A href=" www.marica.rj.gov.br"> www.marica.rj.gov.br</A>
    </FooterEsquerdo>
    <FooterDireito>
      <TagsFooter>
        <p>Fale Conosco</p>
        <p>(21) 2637-2052 ramal 551 | (21) 99202-4725</p>
        <p>passaporte@sctf.marica.rj.gov.br </p>
      </TagsFooter>
      <IconesFooter>
        <IconeFooter href="#" aria-label="Facebook"><FaFacebook /></IconeFooter>
        <IconeFooter href="#" aria-label="Twitter"><VscTwitter /></IconeFooter>
        <IconeFooter href="#" aria-label="Instagram"><FaInstagram /></IconeFooter>
        <IconeFooter href="#" aria-label="YouTube"><FaYoutube /></IconeFooter>
      </IconesFooter>
    </FooterDireito>
  </FooterContainerAqui>
  )
}




export default function Login() {
  return (
    <ContainerLogin>
      <Cabecalho />
      <ConteudoPrincipal>
        <CaixaLogin>
          <TituloLogin>Login</TituloLogin>
          <FormularioLogin />
        </CaixaLogin>
      </ConteudoPrincipal>
      <FooterBranco />
    </ContainerLogin>
  );
}
