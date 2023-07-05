import './Cv.css';

import cvfernando from './../../assets/CV-FernandoAlves.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

import cvcamilla from './../../assets/CV-CamillaCarvalho.pdf';
import piccamilla from './../../assets/profilepics/Camila.jpeg';

import cvbruna from './../../assets/CV-BRUNATULIK.pdf';
import picbruna from './../../assets/profilepics/picbruna.jpeg';

import cvluis from './../../assets/CV-LuisPaulo.pdf';
import picluis from './../../assets/profilepics/picluis.jpeg';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isIOS, isMacOs, isSafari } from 'react-device-detect';

export function Cv() {
    const navigate = useNavigate();

    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);

        if (!isSafari) {
            try {
                const clickEvent = new MouseEvent('click');
                link.dispatchEvent(clickEvent);
                toast.success('Download realizado!', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/cv')
            } catch (error) {
                toast.error('Erro no download: ' + error, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('*');
            }
            document.body.removeChild(link);
        } else {
            toast.warning('Seu navegador não permite dowload\ndireto da página,\nacesse o arquivo para baixa-lo', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/cv')
        }
    };

    return (
        <>
            <h2 className='h1cv'>Integrantes Grupo 1:</h2>
            <main className='cv'>
                <div className='cvbox'>
                    <div className='card'>
                        <img src={picbruna} alt="Bruna Tulik" className='profilepic' />
                        <h2 className='h1but'>Bruna Tulik</h2>
                        <button className='butGetCv'><a href={cvbruna} target='blank'>Visualizar CV</a></button>
                        {(!isSafari || !isIOS || !isMacOs) && <button className='butGetCv' onClick={() => handleDownload(cvbruna, 'Cv-BrunaTulik')}><a href="">Download CV</a></button>}
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={piccamilla} alt="Camilla Carvalho" className='profilepic' />
                        <h2 className='h1but'>Camilla Carvalho</h2>
                        <button className='butGetCv'><a href={cvcamilla} target='blank'>Visualizar CV</a></button>
                        {(!isSafari || !isIOS || !isMacOs) && <button className='butGetCv' onClick={() => handleDownload(cvcamilla, 'Cv-CamillaCarvalho')}><a href="">Download CV</a></button>}
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando Alves" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        {(!isSafari || !isIOS || !isMacOs) && <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'Cv-FernandoAlves')}><a href="">Download CV</a></button>}
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando Alves" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        {(!isSafari || !isIOS || !isMacOs) && <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'Cv-FernandoAlves')}><a href="">Download CV</a></button>}
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picluis} alt="Luis Paulo" className='profilepic' />
                        <h2 className='h1but'>Luis Paulo</h2>
                        <button className='butGetCv'><a href={cvluis} target='blank'>Visualizar CV</a></button>
                        {(!isSafari || !isIOS || !isMacOs) && <button className='butGetCv' onClick={() => handleDownload(cvluis, 'CvLuisPaulo')}><a href="">Download CV</a></button>}
                        
                    </div>
                </div>

            </main>
        </>
    );
}