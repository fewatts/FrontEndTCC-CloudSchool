import './Cv.css';
import cvfernando from './../../assets/CvFernandoAlvesDePaula.pdf';
import picfernando from './../../assets/profilepics/Fernando.jpeg';

export function Cv() {
    return (
        <main className='cv'>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            <div className='cvbox'>
                <div className='card'>
                    <img src={picfernando} alt="Fernando" className='profilepic' />
                    <h1 className='h1but'>Fernando Alves</h1>
                    <button className='butGetCv'><a href={cvfernando} target='blank'>Download CV</a></button>
                </div>
            </div>
            {/* Repeat the above code block for each card */}
        </main>
    );
}
