import './Cv.css';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isIOS, isMacOs, isSafari } from 'react-device-detect';

import cvfernando from './../../assets/CV-FernandoAlves.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

import cvcamilla from './../../assets/CV-CamillaCarvalho.pdf';
import piccamilla from './../../assets/profilepics/Camila.jpeg';

import cvbruna from './../../assets/CV-BRUNATULIK.pdf';
import picbruna from './../../assets/profilepics/picbruna.jpeg';

import cvluis from './../../assets/CV-LuisPaulo.pdf';
import picluis from './../../assets/profilepics/picluis.jpeg';

import cverika from './../../assets/Cv-ErikaSantos.pdf';
import picerika from './../../assets/profilepics/picerika.jpeg';

const integrantes = [
    {
        name: 'Bruna Tulik',
        cvlink: cvbruna,
        cvname: 'Cv-Bruna',
        pic: picbruna,
    },
    {
        name: 'Camila Carvalho',
        cvlink: cvcamilla,
        cvname: 'Cv-Camilla',
        pic: piccamilla,
    },
    {
        name: 'Erika Santos',
        cvlink: cverika,
        cvname: 'Cv-Erika',
        pic: picerika
    },
    {
        name: 'Fernando Alves',
        cvlink: cvfernando,
        cvname: 'Cv-Fernando',
        pic: picfernando,
    },
    {
        name: 'Luis Paulo',
        cvlink: cvluis,
        cvname: 'Cv-Luis',
        pic: picluis,
    }
];

export function Cv() {
    const navigate = useNavigate();

    const handleDownload = (event: React.MouseEvent<HTMLButtonElement>, fileUrl: string, fileName: string) => {

        event.preventDefault();

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);

        if (!isSafari) {
            try {
                const clickEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                });

                link.dispatchEvent(clickEvent);
                toast.success('Download realizado!', {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            } catch (error) {
                toast.error('Erro no download: ' + error, {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                navigate('*');
            }
            document.body.removeChild(link);
        } else {
            toast.warning(
                'Seu navegador não permite download direto da página, acesse o arquivo para baixá-lo',
                {
                    position: 'top-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                }
            );
        }
    };



    return (
        <>
            <h2 className='h1cv'>Integrantes Grupo 1:</h2>
            <main className='cv'>

                {integrantes.map(intengrante => (
                    <div className='cvbox'>
                        <div className='card'>
                            <img src={intengrante.pic} alt={intengrante.name} className='profilepic' />
                            <h2 className='h1but'>{intengrante.name}</h2>
                            <button className='butGetCv'><a href={intengrante.cvlink} target='blank'>Visualizar CV</a></button>
                            {(!isSafari && !isIOS && !isMacOs) && <button className='butGetCv' onClick={(event) => handleDownload(event, intengrante.cvlink, intengrante.cvname)}>Download CV</button>}
                        </div>
                    </div>
                ))}

            </main>
        </>
    );
}