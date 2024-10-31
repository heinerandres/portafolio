import React, { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

export const Inicio = () => {

  const [ scrollPosition, setScrollPosition ] = useState(0);

  const [ minMax, setMinMax ] = useState({
    min: 0,
    max: 0,
  });

  const [ windowDimensions, setWindowDimensions ] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect( () => {
    //resize de la pagina
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize);



    //scroll para focus de la opcion
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    document.getElementById("about").focus();
    

    if(windowDimensions.width == 1920 && windowDimensions.height == 919){
      setMinMax({
        min: 550,
        max: 1450,
      })
    }
    else if(windowDimensions.width == 1366 && windowDimensions.height == 768){
      setMinMax({
        min: 448,
        max: 1412,
      })
    }
    else if(windowDimensions.width == 1280 && windowDimensions.height == 800){
      setMinMax({
        min: 501,
        max: 1475,
      })
    }
    else if(windowDimensions.width == 1280 && windowDimensions.height == 1024){
      setMinMax({
        min: 400,
        max: 1251,
      })
    }
    else if(windowDimensions.width == 1024 && windowDimensions.height == 768){
      setMinMax({
        min: 400,
        max: 1306,
      })
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      if(currentScroll < minMax.min) {
        document.getElementById("about").focus();
      }
      else if(currentScroll >= minMax.min && currentScroll < minMax.max){
        document.getElementById("experience").focus();
      }
      else if(currentScroll >= minMax.max){
        document.getElementById("projects").focus();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate('/projects');
  }

  //onclick para cambiar scroll
  const toAbout = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  const toExperience = () => {
    window.scrollTo({top: minMax.min, left: 0, behavior: 'smooth'});
  }

  const toProjects = () => {
    window.scrollTo({top: minMax.max, left: 0, behavior: 'smooth'});
  };

    const handleClick = (event) => {
        if(event.target.src =="http://localhost:5173/img/git-oscuro.png")
        {
          window.open("https://github.com/heinerandres", "_blank", "noopener,noreferrer");
          event.target.src="./img/git-claro.png";
          const timer = setTimeout(() =>{
            event.target.src="http://localhost:5173/img/git-oscuro.png";
          }, 1500);
        } 
        if(event.target.src =="http://localhost:5173/img/in-oscuro.png")
        {
          window.open("https://www.linkedin.com/in/heinersolano/", "_blank", "noopener,noreferrer");
          event.target.src="./img/in-claro.png";
          const timer = setTimeout(() =>{
            event.target.src="http://localhost:5173/img/in-oscuro.png";
          }, 1500);
        }
          
        if(event.target.src =="http://localhost:5173/img/telefono-oscuro.png") 
        {
          event.target.src="./img/telefono-claro.png";
          document.getElementById("telefono").style.display = "block";
          const timer = setTimeout(() =>{
            document.getElementById("telefono").style.display = "none";
            event.target.src="./img/telefono-oscuro.png";
          }, 1500);
        }
          
        if(event.target.src =="http://localhost:5173/img/correo-oscuro.png")
        {
          event.target.src="./img/correo-claro.png";
          document.getElementById("correo").style.display = "block";
          const timer = setTimeout(() =>{
            document.getElementById("correo").style.display = "none";
            event.target.src="./img/correo-oscuro.png";
          }, 1500);
        }
    }
    const handleNovacomp = () => {
      window.open("https://www.crnova.com/", "_blank", "noopener,noreferrer");
    }

    const handleGrupoBabel = () => {
      window.open("https://babelgroup.com/", "_blank", "noopener,noreferrer");

    }
    const handleODS = () => {
      window.open("https://www.linkedin.com/company/optimized-data-solutions/", "_blank", "noopener,noreferrer") ;
      
    }
    const handleSeidor = () => {
      window.open("https://www.seidor.com/es-cr", "_blank", "noopener,noreferrer");
    }

    const handleHojaVida = () => {
      window.open("./cv.pdf", "_blank");
    }
    const handleAmazon = () => {
      window.open("https://ecommerce-backend-aafqbaf5baeddjad.canadacentral-01.azurewebsites.net/", "_blank");
    }
  return (
    <>
      <div className="body-wrapper">
        <header>
          <div className="header-wrapper">
            <div className="header-information">
              <div className="titulo-header-wrapper">
                <span>Heiner Andrés</span>
              </div>
              <div className='subtitulo-header-wrapper'>
                <span>Senior Sofware Engineer</span>
              </div>
              <div className='descripcion-header-wrapper'>
                <span>I build engaging, and accessible software experience.</span>
              </div>
              <div className='header-opciones'>
                <div tabIndex={0} 
                onClick={ toAbout } 
                className="opcion-wrapper"
                id="about">
                  <div className="linea"></div>
                  <div className="opcion"><span>ABOUT</span></div>
                </div>
                <div 
                tabIndex={0} 
                onClick={ toExperience } 
                className="opcion-wrapper"
                id="experience">
                  <div className="linea"></div>
                  <div className="opcion"><span>EXPERIENCE</span></div>
                </div>
                <div 
                tabIndex={0} 
                onClick={ toProjects } 
                className="opcion-wrapper"
                id="projects">
                  <div className="linea"></div>
                  <div className="opcion"><span>PROJECTS</span></div>
                </div>
              </div>
            </div>
            
            <div className="header-socials">
            <div className="wrapper-social">
                <div 
                  onClick={ handleClick } 
                  className='icon-social'>
                    <img className='ajustar' src="./img/git-oscuro.png"></img>
                </div>
              </div>
              <div className="wrapper-social">
                <div 
                  onClick={ handleClick } 
                  className='icon-social'>
                    <img src="./img/in-oscuro.png"></img>
                </div>
              </div>
              <div className="wrapper-social">
                <div 
                onClick={ handleClick } 
                className='icon-social'>
                  <img src="./img/telefono-oscuro.png"></img>
                </div>
                <div className="contenido-social">
                  <span id="telefono">+(506) 64040376</span>
                </div>
                
              </div>
              <div className="wrapper-social">
                <div 
                    onClick={ handleClick } 
                    className="icon-social">
                  <img src="./img/correo-oscuro.png"></img>
                </div>
                <div className="contenido-social">
                  <span id="correo">heiner.andres@outlook.com</span>
                </div>
                
              </div>
            </div>
          </div>
          </header>
        <main>
          <div className="main-wrapper">
            <div className="parrafo-wrapper">
              <p>
                Back in 2015, I started with a practice creating apps, managing data and learning from projects, fast-forward, today I've had the privilege of building software for a SAP-partner, banking outsorcing companies, and software factories.
                </p>
                <p>
                My focus these days is build software with accesible user interfaces for customers. I have worked with .net, android studio, javascript and I also create a web page similar to Amazon learning react, using google for registration and node js as backend.
                </p>
                <p>
                When I am not at the computer, I'm playing basket, videogames or learning another technology. It will be a pleasure.
                </p>
            </div>
            <div className='experiences-wrapper'>
              <div onClick={ handleNovacomp } className="experience-wrapper">
                <div className="fechas-experience">
                  <span>FEB 2022 - NOV 2022</span>
                </div>
                <div className="titulo-descripcion-tecnologias">
                  <div className='titulo-experience-wrapper'>
                    <div className='titulo-experience'>
                      <span>Software Engineer · Novacomp</span>
                    </div>
                    <div className="flecha-wrapper">
                      <img src="./img/flecha.png"></img>
                    </div>
                  </div>
                  <div className='contenido-experiencia-wrapper'>
                    <p>
                      Build new components used in platforms nationalwide. Work closely with cross-functional teams, including developers, quality team and product managers to implement good practices. 
                    </p>
                  </div>
                  <div className='tecnologias-wrapper'>
                    <div className="tecnologia">
                      <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>Windows Forms</span>
                    </div>
                    <div className="tecnologia">
                      <span>WCF</span>
                    </div>
                    <div className="tecnologia">
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>TFS</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={ handleGrupoBabel } className="experience-wrapper">
                <div className="fechas-experience">
                  <span>OCT 2020 — FEB 2022</span>
                </div>
                <div className="titulo-descripcion-tecnologias">
                  <div className='titulo-experience-wrapper'>
                    <div className='titulo-experience'>
                      <span>Software Engineer · Grupo Babel</span>
                    </div>
                    <div className="flecha-wrapper">
                      <img src="./img/flecha.png"></img>
                    </div>
                  </div>
                  <div className='contenido-experiencia-wrapper'>
                    <p>
                       Software factory's work develop tools to manage data. Web pages, databases, reports, shedules, appointments.
                    </p>
                  </div>
                  <div className='tecnologias-wrapper'>
                    <div className="tecnologia">
                      <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>MVC</span>
                    </div>
                    <div className="tecnologia">
                      <span>Rest api</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>.Net Core</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div onClick={ handleODS } className="experience-wrapper">
                <div className="fechas-experience">
                  <span>SEP 2016 - JAN 2018</span>
                </div>
                <div className="titulo-descripcion-tecnologias">
                  <div className='titulo-experience-wrapper'>
                    <div className='titulo-experience'>
                      <span>Software Engineer · Optimized Data Solutions</span>
                    </div>
                    <div className="flecha-wrapper">
                      <img src="./img/flecha.png"></img>
                    </div>
                  </div>
                  <div className='contenido-experiencia-wrapper'>
                    <p>
                      Build new software as an outsorcing company. Create and manage banking software.
                    </p>
                  </div>
                  <div className='tecnologias-wrapper'>
                    <div className="tecnologia">
                      <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>MVC</span>
                    </div>
                    <div className="tecnologia">
                      <span>WCF</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>TFS</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div onClick={ handleSeidor } className="experience-wrapper">
                <div className="fechas-experience">
                  <span>MAR 2015 - JUN 2016</span>
                </div>
                <div className="titulo-descripcion-tecnologias">
                  <div className='titulo-experience-wrapper'>
                    <div className='titulo-experience'>
                      <span>Mobile Software Engineer · Seidor</span>
                    </div>
                    <div className="flecha-wrapper">
                      <img src="./img/flecha.png"></img>
                    </div>
                  </div>
                  <div className='contenido-experiencia-wrapper'>
                    <p>
                      SAP-partner company. Create software joining functionalities with the ERP.
                    </p>
                  </div>
                  <div className='tecnologias-wrapper'>
                    <div className="tecnologia">
                      <span>Android Studio</span>
                    </div>
                    <div className="tecnologia">
                      <span>Java</span>
                    </div>
                    <div className="tecnologia">
                      <span>Python</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={ handleHojaVida } className="view-full-resume">
              <div>
                <span>View Full Resume</span>
              </div>
              <div className='wrapper-flecha-full-resume'>
                <img src="./img/flecha.png"></img>
              </div>
            </div>
            <div className="projects-wrapper">
              <div onClick={ handleAmazon } className="project-wrapper">
                <div className="fotos-wrapper">
                  <div className="img-wrapper">
                    <img src="./img/amazon1.PNG"></img>
                  </div>
                  <div className='img-wrapper'>
                    <img src="./img/amazon2.PNG"></img>
                  </div>
                </div>
                <div className="informacion-wrapper">
                  <div className="contenido-proyecto-wrapper">
                    <div className="titulo-flecha-proyecto">
                      <div className="titulo-proyecto">
                        <span>Amazon web project</span>
                      </div>
                      <div className="flecha-proyecto">
                        <img src="./img/flecha.png"></img>
                      </div>
                    </div>
                    <div className='informacion-proyecto-wrapper'>
                      <p>Web page similar to Amazon, few products and users can add them to the cart, managing clients with firebase. This is a simple web to learn how react works.</p>
                    </div>
                    <div className='tecnologias-wrapper'>
                      <div className="tecnologia">
                        <span>React</span>
                      </div>
                      <div className="tecnologia">
                        <span>Javascript</span>
                      </div>
                      <div className="tecnologia">
                        <span>Node.js</span>
                      </div>
                      <div className="tecnologia">
                        <span>Mongo</span>
                      </div>
                      <div className="tecnologia">
                        <span>Firebase</span>
                      </div>
                      <div className="tecnologia">
                        <span>Html & css</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-full-projects">
              <div>
                <span onClick={ handleNavigate }>View Full Project Archive</span>
              </div>
              <div className='wrapper-flecha-projects'>
                <img src="./img/flecha-derecha.png"></img>
              </div>
            </div>
            <div className='firma'>
              <p>Creada con propositos de educación y portafolio</p>
              <p>© Heiner Andrés Solano Arguedas</p>
            </div>
          </div>
        </main>
      
      </div>
    </>
  )
}
