import React from 'react';
import { Section } from '../../components/section/Section';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CodeIcon from '@mui/icons-material/Code';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { Card } from '../../components/card/Card';
import { StyledH3, StyledP } from '../../components/card/styled';
import { HalfCard } from '../../components/half-card/Half-card';
import { StyledCode } from '../../components/destaque/styled';
import { Footer } from '../../components/footer/Footer';

export const Landing = () => {
  return (
    <>
      <Section id='header' bg='url(https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=10.jpeg)' size='big' title={'Uma página React'} />

      <Section id='icon-cards' size='big' bgColor='white'>
        <Card>
          <CodeIcon style={{ fontSize: '80px', color: '#067bfc' }} />
          <StyledH3>Declarativo</StyledH3>
          <StyledP>
            React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples
            para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma
            eficiente apenas os componentes necessários na medida em que os dados mudam.
          </StyledP>
        </Card>
        <Card>
          <DesktopWindowsIcon style={{ fontSize: '80px', color: '#067bfc' }} />
          <StyledH3>Baseado em componentes</StyledH3>
          <StyledP>
            Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para
            criar UIs complexas. <br />
            Como a lógica do componente é escrita em JavaScript e não em templates, você pode
            facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o
            estado fora do DOM.
          </StyledP>
        </Card>
        <Card>
          <SelfImprovementIcon style={{ fontSize: '80px', color: '#067bfc' }} />
          <StyledH3>
            Aprenda uma vez, <br />
            use em qualquer lugar
          </StyledH3>
          <StyledP>
            Não fazemos suposições sobre as outras tecnologias da sua stack, assim você pode
            desenvolver novos recursos com React sem reescrever o código existente.
          </StyledP>
        </Card>
      </Section>

      <Section id='half-cards-1' size='big'>
        <HalfCard title='Um Componente Simples'>
          Os componentes do React implementam um método <StyledCode>render()</StyledCode>
          que recebe os dados de entrada e retornam o que deve ser exibido. Este exemplo usa uma
          sintaxe parecida com XML chamada JSX. Os dados de entrada que são passados para o
          componente podem ser acessados no <StyledCode>render()</StyledCode> via{' '}
          <StyledCode>this.props</StyledCode>.
          <br />
          <br />
          <b>O JSX é opcional e não é necessário para usar o React</b>. Teste o Babel REPL para ver
          o código JavaScript bruto produzido pela etapa de compilação do JSX.
        </HalfCard>
        <HalfCard img='https://img.olhardigital.com.br/wp-content/uploads/2021/12/Code-1000x450.jpg' />
      </Section>

      <Section id='half-cards-2' size='big' bgColor='white'>
        <HalfCard img='https://www.incimages.com/uploaded_files/image/1920x1080/getty_660582997_412145.jpg' />
        <HalfCard title='Um Componente Simples'>
          Os componentes do React implementam um método <StyledCode>render()</StyledCode>
          que recebe os dados de entrada e retornam o que deve ser exibido. Este exemplo usa uma
          sintaxe parecida com XML chamada JSX. Os dados de entrada que são passados para o
          componente podem ser acessados no <StyledCode>render()</StyledCode> via{' '}
          <StyledCode>this.props</StyledCode>.
          <br />
          <br />
          <b>O JSX é opcional e não é necessário para usar o React</b>. Teste o Babel REPL para ver
          o código JavaScript bruto produzido pela etapa de compilação do JSX.
        </HalfCard>
      </Section>

      <Section id='half-cards-3' size='big'>
        <HalfCard title='Um Componente Simples'>
          Os componentes do React implementam um método <StyledCode>render()</StyledCode>
          que recebe os dados de entrada e retornam o que deve ser exibido. Este exemplo usa uma
          sintaxe parecida com XML chamada JSX. Os dados de entrada que são passados para o
          componente podem ser acessados no <StyledCode>render()</StyledCode> via{' '}
          <StyledCode>this.props</StyledCode>.
          <br />
          <br />
          <b>O JSX é opcional e não é necessário para usar o React</b>. Teste o Babel REPL para ver
          o código JavaScript bruto produzido pela etapa de compilação do JSX.
        </HalfCard>
        <HalfCard img='https://res.cloudinary.com/practicaldev/image/fetch/s--NfOCGDyJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/rq48n957djcp028jlv59.jpg' />
      </Section>

      <Section id='contact' bg='url(https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=10.jpeg)' title={'Contato'} />

      <Section id='footer'>
        <Footer />
      </Section>
    </>
  );
};
