import './Home.css';
import home from './../../assets/logos/home.png';

export function Home() {
    return (
        <main>
            <div className='container'>
                <h1 className='h1home'>Bem-vindo!</h1>
                <br />
                <h3 className='text1'>Este é o nosso web site de divulgação de currículos!</h3>
                <br />
                <p className='text1'>Somos um grupo de estudantes em transição de carreira que estão focados no aprendizado da AWS (Amazon Web Services). Nosso objetivo é construir habilidades técnicas e interpessoais, essenciais para enfrentar desafios no setor de tecnologia. Nós desenvolvemos um projeto empolgante: um site estático usando serviços da AWS. Esse projeto nos ajudou a aprimorar nossas habilidades técnicas, incluindo desenvolvimento web e gerenciamento de serviços em nuvem. Nós estamos entusiasmados em compartilhar nosso trabalho com recrutadores e convidamos as pessoas a entrar em contato conosco para saber mais sobre nossas experiências.</p>
            </div>
            <div className='homepic'><img src={home} alt="pic home" className='Homepic' /></div>
        </main>
    );
}