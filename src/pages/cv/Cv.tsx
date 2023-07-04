import './Cv.css';

import cvfernando from './../../assets/CvFernandoAlvesDePaula.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

import cvcamilla from './../../assets/CV-CamillaCarvalho.pdf';
import piccamilla from './../../assets/profilepics/Camila.jpeg';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Cv() {

    const navigate = useNavigate();

    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);

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
    };

    return (
        <>
            <h2 className='h1cv'>Integrantes Grupo 1:</h2>
            <main className='cv'>
                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={piccamilla} alt="Camilla Carvalho" className='profilepic' />
                        <h2 className='h1but'>Camilla Carvalho</h2>
                        <button className='butGetCv'><a href={cvcamilla} target='blank'>Visualizar CV</a></button>
                        <button className='butGetCv' onClick={() => handleDownload(cvcamilla, 'Cv-CamillaCarvalho')}><a href="">Download CV</a></button>
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                    </div>
                </div>

                <div className='cvbox'>
                    <div className='card'>
                        <img src={picfernando} alt="Fernando" className='profilepic' />
                        <h2 className='h1but'>Fernando Alves</h2>
                        <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                        <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                    </div>
                </div>
            </main>
        </>
    );
}