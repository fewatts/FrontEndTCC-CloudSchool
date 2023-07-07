import './Footer.css';
import gitlogo from './../../assets/logos/github.svg'

export function Footer() {
    return (
        <footer>
            <a href="https://github.com/fewatts/tcc-cloud-school" target='blank'><abbr title="repositório no github"><img src={gitlogo} alt="Repositório" className='git' /></abbr></a>
            <p>Copyright FCLEB ©</p>
        </footer>
    );
}