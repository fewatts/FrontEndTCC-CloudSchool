import './About.css';

export function About() {
    return (
        <main className='about'>
            <div id='sh'>
                <h1 id='h1about'>Sobre nós</h1>
                <p className='para'>
                    Somos um grupo de estudantes em transição de carreira focados no aprendizado da AWS (Amazon Web Services). Estamos  dedicados a expandir nossos conhecimentos e habilidades nessa plataforma líder de computação em nuvem.
                    Nosso objetivo é construir uma base sólida de competências técnicas e habilidades interpessoais, conhecidas como hard e soft skills, respectivamente. Acreditamos que essa combinação é fundamental para enfrentar os desafios do setor de tecnologia.
                </p>
                <br />
                <p className='para'>
                    Durante nossa jornada de aprendizado, desenvolvemos um projeto empolgante: a criação de um site estático. Utilizamos serviços poderosos da AWS, como o Amazon S3 para hospedar o site, o Amazon Route 53 para gerenciar o registro de domínio e o Amazon CloudFront para fornecer conteúdo de maneira rápida e segura aos visitantes.
                    Nossa experiência na criação desse projeto nos permitiu aprimorar nossas habilidades técnicas, como desenvolvimento web, gerenciamento de serviços em nuvem e configuração de infraestrutura escalável.
                </p>
                <br />
                <p className='para'>
                    Estamos entusiasmados em compartilhar nosso trabalho com recrutadores e outros profissionais da área. Este site é uma vitrine do nosso aprendizado e um reflexo do nosso compromisso em evoluir como profissionais de tecnologia.
                    Agradecemos por visitar nosso site e esperamos que você aprecie o que criamos. Se você deseja entrar em contato conosco ou saber mais sobre nossas experiências, não hesite em nos contatar.
                </p>
            </div>
        </main>
    );
}