import './Error.css';
import error from './../../assets/logos/404 Error.svg';

export function Error() {
    return (
        <main className='error'>
            <h1 className='h1error'>Ops...</h1>
            <picture className='imgerror'><img src={error} alt="404" /></picture>
        </main>
    );
}