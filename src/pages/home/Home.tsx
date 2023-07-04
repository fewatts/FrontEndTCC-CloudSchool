import './Home.css';
import home from './../../assets/logos/home.svg';

export function Home() {
    return (
        <main>
            <div className='container'>
                <h1 className='h1home'>Bem-vindo!</h1>
                <h2 className='text1'>Este é o nosso web site de divulgação de currículos!</h2>
                <p className='text1'>Use a barra de navegação para acessar as informações c:</p>
            </div>
            <div className='homepic'><img src={home} alt="pic home" className='Homepic' /></div>
        </main>
    );
}