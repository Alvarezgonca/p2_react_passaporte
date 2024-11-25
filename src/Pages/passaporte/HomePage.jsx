import styled from 'styled-components';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Login from './Login';
import { VscAccount } from "react-icons/vsc";
import { VscTwitter, VscInstagram, VscFacebook, VscYoutube } from "react-icons/vsc";


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1rem;
  display: inline-block;
  width: auto;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

// INICIO HEADER

export const HeaderContainer = styled.div `
padding: 1.6rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);


`;

export const HeaderEsquerda = styled.div `
display: flex;
align-items: center;
`;

export const HeaderDireita = styled.div `
display: flex;
align-items: center;
gap: 1rem;
`;

export const Botao = styled.button `
background-color: #007bff;
color: #fff;
border: none;
padding: 0.8rem 1.6rem;
border-radius: 5px;
cursor: pointer;
`

export const TituloH2 = styled.h2 `
font-size: 1.3rem;
`

export const FlexColumn = styled.div `
display: flex;
flex-direction: column;
`
// FIM HEADER

// COMEÇO MAIN

export const ContainerMain = styled.div `
padding: 1.6rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
`

export const ContainerMainGrid = styled.div `
display: grid;
grid-template-columns: repeat(2, 50%);
`

export const ContainerMainGridEsquerda = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
`

export const ContainerMainGridDireita = styled.div `
display: flex;
justify-content: center;
align-items: center;
`

export const ParagrafoGrande = styled.p `
font-size: 2rem;
`

export const A = styled.a `
color: #007bff;
text-decoration: none;

&:hover {
    text-decoration: underline;
}
`

export const Gap1 = styled.div `
display: flex;
flex-direction: column;
gap: 1rem;
`

// FIM MAIN


// COMEÇO FOOTER

export const FooterContainer = styled.div `
padding: 1.6rem;
background: linear-gradient(146deg, #0025b8,#031a77,#110066,#6f0107,#8a0000);
display: grid;
grid-template-columns: repeat(2, 50%);
color: white;
`



export const FooterEsquerdo = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
`

export const FooterDireito = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
`

export const AlinharColumnCentro = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`

export const TagsFooter = styled.div `
`

export const IconesFooter = styled.div `
display: flex;
gap: 1rem;
`








function Header() {
  return (
    <HeaderContainer>
      <HeaderEsquerda>
        <img src='logoPassaporte.png' alt='Logo' width={70} />
        <FlexColumn>
          <TituloH2>Passaporte</TituloH2>
          <TituloH2>Universitário</TituloH2>
        </FlexColumn>
      </HeaderEsquerda>
      <HeaderDireita>
        <StyledLink to='/login'><Botao>Faça seu login</Botao></StyledLink>
        <VscAccount className="custom-icon-vsc"/>
      </HeaderDireita>
    </HeaderContainer>
  )
}


function Main() {
  return (
    <ContainerMain>
      <ContainerMainGrid>
          <ContainerMainGridEsquerda>
          <ParagrafoGrande>Venha participar do nosso programa de qualificação e formação acadêmico profissional.</ParagrafoGrande>
          <Botao>Realizar Primeiro Cadastro</Botao>
          <div><A href="https://passaporteuniversitario.marica.rj.gov.br/documentacao-necessaria" target="_blank">Acesse a documentação necessária</A></div>
          </ContainerMainGridEsquerda>
          <ContainerMainGridDireita>
              <img src="foto_passaporte.jpeg" alt="passportianos" width={500} />
          </ContainerMainGridDireita>
      </ContainerMainGrid>
      <Gap1>
          <h2>O Programa:</h2>
          <p>O Programa Passaporte Universitário foi criado como forma de investimento na qualificação e formação acadêmico-profissional, através da concessão de bolsas de estudos para expandir e interiorizar a oferta de cursos de graduação e pós-graduação à nível de especialização, mestrado e doutorado, bem como promover a geração de pesquisa e inovação voltadas às demandas locais e regionais.
          O Programa visa fomentar o desenvolvimento socioeducacional do município, combatendo as desigualdades sociais, contribuindo para a formação dos sujeitos, em todos os aspectos e na geração de emprego e renda. O Passaporte Universitário possui dois tipos de incentivo através de Bolsas Universitárias: Social e de Excelência.</p>
      </Gap1>
      <Gap1>
          <h2>Instituições Credenciadas:</h2>
          <p>Confira nossas Instituições Credenciadas e veja qual mais atende as suas necessidades.</p>
          <div><StyledLink to="https://passaporteuniversitario.marica.rj.gov.br/instituicoes-credenciadas"><Botao>Conheça as instituições credenciadas</Botao></StyledLink></div>
      </Gap1>
      <Gap1>
          <h2>Resultados:</h2>
          <p>Confira os resultados de cada disciplina do programa Passaporte Universitário.</p>
          <div><StyledLink to="https://passaporteuniversitario.marica.rj.gov.br/resultados"><Botao>Verifique os resultados</Botao></StyledLink></div>
      </Gap1>
      <Gap1>
          <h2>Legislação</h2>
          <p>Confira toda a legislação do programa como leis, decretos, resoluções, portarias, editais, etc...</p>
          <div><StyledLink to="https://passaporteuniversitario.marica.rj.gov.br/legislacao"><Botao>Acesse a legislação do programa</Botao></StyledLink></div>
      </Gap1>
    </ContainerMain>
  )
}

function Footer() {
  return (
    <FooterContainer>
      <FooterEsquerdo>
        <AlinharColumnCentro>
          <ParagrafoGrande>Secretaria de Ciência,</ParagrafoGrande>
          <ParagrafoGrande>Tecnologia e Formação.</ParagrafoGrande>
        </AlinharColumnCentro>
        <img src="logo-footer.png" alt="Logo da Prefeitura de Maricá"/>
        <A href=" www.marica.rj.gov.br"> www.marica.rj.gov.br</A>
      </FooterEsquerdo>
      <FooterDireito>
        <TagsFooter>
          <p>Fale Conosco</p>
          <p>(21) 2637-2052 ramal 551 | (21) 99202-4725</p>
          <p>passaporte@sctf.marica.rj.gov.br </p>
        </TagsFooter>
        <IconesFooter>
          <VscTwitter className="custom-icon-vsc twitter"/>
          <VscTwitter className="custom-icon-vsc twitter"/>
          <VscTwitter className="custom-icon-vsc twitter"/>
          <VscTwitter className="custom-icon-vsc twitter"/>
        </IconesFooter>
      </FooterDireito>
    </FooterContainer>
  )
}






export default function HomePage() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
