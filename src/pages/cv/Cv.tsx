import './Cv.css';
import { useState } from 'react';

import cvfernando from './../../assets/CvFernandoAlvesDePaula.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

import cvcamilla from './../../assets/CV-CamillaCarvalho.pdf';
import piccamilla from './../../assets/profilepics/Camila.jpeg';

export function Cv() {

    const [downloadSuccess, setDownloadSuccess] = useState(true);

    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);

        try {
            const clickEvent = new MouseEvent('click');
            link.dispatchEvent(clickEvent);
            setDownloadSuccess(true);
        } catch (error) {
            console.error('Error occurred during download:', error);
            setDownloadSuccess(false);
        }

        document.body.removeChild(link);
    };

    return (
        <main className='cv'>
            {downloadSuccess ? (
                <>
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

                </>
            ) : (
                <div className='cvbox'>
                    <div className='card'>
                        <h1>Download Error</h1>
                        <p className='errorp'>Sorry, there was an error during the download process.</p>
                    </div>
                </div>
            )}
        </main>
    );
}