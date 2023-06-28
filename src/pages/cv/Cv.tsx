import './Cv.css';
import cvfernando from './../../assets/CvFernandoAlvesDePaula.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

export function Cv() {

    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className='cv'>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Visualizar CV</a></button>
                    <button className='butGetCv' onClick={() => handleDownload(cvfernando, 'CvFernandoAlves')}><a href="">Download CV</a></button>
                </div>
            </div>
        </main>
    );
}
