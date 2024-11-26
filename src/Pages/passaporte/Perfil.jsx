import React from 'react';
import styled from 'styled-components';
import { Footer, HeaderContainer, HeaderEsquerda, FlexColumn, HeaderDireita, TituloH2, StyledLink } from './HomePage';
import { VscAccount } from "react-icons/vsc";
import {Link} from 'react-router-dom';


export const LinkEstilizado = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1rem;
  display: inline-block;
  width: auto;
  padding: 0;
`;

const ContainerGridPerfil = styled.div `
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
margin: 1.5rem 0.5rem;
`

const ContainerImagemPerfil = styled.div `
display: flex;
justify-content: center;
align-items: center;
margin: 1.5rem 0.5rem;
`

const ContainerMainEsquerdaPerfil = styled.div `
display: flex;
flex-direction: column;
gap: 1rem;
`

const Centrailizar = styled.div `
display: flex;
justify-content: center;
`

const ContainerMainDireita = styled.div `
display: flex;
flex-direction: column;
gap: 1rem;
`

const CaixaContrapartida = styled.div `
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 1rem 0.5rem;
border-radius: 0.3rem;
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`



function MainPerfil() {
    return (
        <>
          <ContainerGridPerfil>
            <ContainerMainEsquerdaPerfil>
            <Centrailizar><VscAccount className="custom-icon-vsc icon-grande"/></Centrailizar>
                <p>Nome: Joãozinho Passaportiano</p>
                    <p>CPF: 999.999.999-99</p>
                    <p>Campus: Maricá</p>
                    <p>Curso: Engenharia de software</p>
                    <p>Turno: Noite</p>
                    <p>Período: 8</p>
                    <p>Situação: Matriculado</p>
            </ContainerMainEsquerdaPerfil>
            <ContainerMainDireita>
                <ContainerImagemPerfil>
                    <div>
                        <img src="grafico.jpeg" width={600} alt="Gráfico" />
                    </div>
                </ContainerImagemPerfil>
                <CaixaContrapartida>
                    <p><b>Horas de Contrapartidas concluídas:</b> 200 Horas</p>
                    <p><b>Horas de Contrapartidas restantes:</b> 160 Horas</p>
                </CaixaContrapartida>
            </ContainerMainDireita>
        </ContainerGridPerfil>
        </>
    )
}

function HeaderSemLogin() {
    return (
        <>
            <HeaderContainer>
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
            <HeaderDireita>
                <div><StyledLink to="/perfil"><VscAccount className="custom-icon-vsc"/></StyledLink></div>
            </HeaderDireita>
            </HeaderContainer>
        </>
    )
}

export default function Perfil() {
    return (
        <>
          <HeaderSemLogin/>
          <MainPerfil/>
          <Footer/>
        </>
    );
}