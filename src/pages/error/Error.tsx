import './Error.css';
import error from './../../assets/logos/404 Error.svg';

export function Error() {
    return (
        <main className='error'>
            <div className='error'>
                <h1 className='h1error'>Ops...</h1>
                <img src={error} alt="404" className='imgerror'/>
            </div>
        </main>
    );
}