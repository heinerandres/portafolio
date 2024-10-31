import { useNavigate } from 'react-router-dom';
import './AllProjects.css'
import React, { useEffect } from 'react'

export const AllProjects = () => {
  useEffect( () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  }, []);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
  return (
    <div className="projects-page-wrapper">
        <div className="projects-list-wrapper">
            <div className="titulos-wrapper">
            <div onClick={ handleBack } className='back-wrapper'>
                <div className="flecha-back-wrapper">
                    <img src="./img/flecha-izquierda.png"></img>
                </div>
                <span>Heiner Andrés</span>
            </div>
            <div className='titulo-pagina'>
                <span>Projects</span>
            </div>
            </div>
            <div className='header-wrapper-projects'>
                <div className='header-projects-list'>
                    <span>Year</span>
                    <span className="project-">Project</span>
                    <span className="made-at">Made at</span>
                    <span className="built-with">Built with</span>
                </div>
            </div>
            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                    <div className='year-content'>
                        <span>2024</span>
                    </div>
                    <div className="proyect-content">
                        <span>Portfolio</span>
                    </div>
                    <div className="made-at-content">
                        <span>Portfolio</span>
                    </div>
                    <div className="built-with-content">
                      <div className="tecnologia">
                        <span>React</span>
                      </div>
                      <div className="tecnologia">
                        <span>Html & css</span>
                      </div>
                      <div className="tecnologia">
                        <span>Javascript</span>
                      </div>
                      <div className="tecnologia">
                        <span>Responsive</span>
                      </div>
                    </div>
                </div>
            </div>
            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                    <div className='year-content'>
                        <span>2024</span>
                    </div>
                    <div className="proyect-content">
                        <span>Amazon</span>
                    </div>
                    <div className="made-at-content">
                        <span>React portfolio</span>
                    </div>
                    <div className="built-with-content">
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

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                    <div className='year-content'>
                        <span>2022</span>
                    </div>
                    <div className="proyect-content">
                        <span>INS</span>
                    </div>
                    <div className="made-at-content">
                        <span>Novacomp</span>
                    </div>
                    <div className="built-with-content">
                      <div className="tecnologia">
                        <span>C#</span>
                      </div>
                      <div className="tecnologia">
                        <span>Windows forms</span>
                      </div>
                      <div className="tecnologia">
                        <span>WCF</span>
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

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                    <div className='year-content'>
                        <span>2022</span>
                    </div>
                    <div className="proyect-content">
                        <span>Banco Nacional de Costa Rica</span>
                    </div>
                    <div className="made-at-content">
                        <span>Novacomp</span>
                    </div>
                    <div className="built-with-content">
                      <div className="tecnologia">
                          <span>C#</span>
                      </div>
                      <div className="tecnologia">
                        <span>Windows forms</span>
                      </div>
                      <div className="tecnologia">
                        <span>WCF</span>
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

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2021</span>
                  </div>
                  <div className="proyect-content">
                      <span>CNE</span>
                  </div>
                  <div className="made-at-content">
                      <span>Grupo Babel</span>
                  </div>
                  <div className="built-with-content">
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
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>Azure</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2021</span>
                  </div>
                  <div className="proyect-content">
                      <span>CCSS</span>
                  </div>
                  <div className="made-at-content">
                      <span>Grupo Babel</span>
                  </div>
                  <div className="built-with-content">
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
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>Azure</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2020</span>
                  </div>
                  <div className="proyect-content">
                      <span>Banco Popular</span>
                  </div>
                  <div className="made-at-content">
                      <span>Grupo Babel</span>
                  </div>
                  <div className="built-with-content">
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
                      <span>Git</span>
                    </div>
                    <div className="tecnologia">
                      <span>Azure</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2018</span>
                  </div>
                  <div className="proyect-content">
                      <span>ACH Honduras CitiBank</span>
                  </div>
                  <div className="made-at-content">
                      <span>ODS</span>
                  </div>
                  <div className="built-with-content">
                    <div className="tecnologia">
                        <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>MVC</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>WCF</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2017</span>
                  </div>
                  <div className="proyect-content">
                      <span>Production Support</span>
                  </div>
                  <div className="made-at-content">
                      <span>ODS</span>
                  </div>
                  <div className="built-with-content">
                    <div className="tecnologia">
                        <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>MVC</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>WCF</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2017</span>
                  </div>
                  <div className="proyect-content">
                      <span>Shipping, Panama Canal CitiBank</span>
                  </div>
                  <div className="made-at-content">
                      <span>ODS</span>
                  </div>
                  <div className="built-with-content">
                    <div className="tecnologia">
                        <span>C#</span>
                    </div>
                    <div className="tecnologia">
                      <span>MVC</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>WCF</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2016</span>
                  </div>
                  <div className="proyect-content">
                      <span>Ecommerce</span>
                  </div>
                  <div className="made-at-content">
                      <span>Seidor</span>
                  </div>
                  <div className="built-with-content">
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>PHP</span>
                    </div>
                    <div className="tecnologia">
                      <span>Java</span>
                    </div>
                    <div className="tecnologia">
                      <span>Python</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>

            <div className='project-list-item-wrapper'>
                <div className="project-list-item">
                  <div className='year-content'>
                      <span>2015</span>
                  </div>
                  <div className="proyect-content">
                      <span>Warehouse Management Gutis</span>
                  </div>
                  <div className="made-at-content">
                      <span>Seidor</span>
                  </div>
                  <div className="built-with-content">
                    <div className="tecnologia">
                      <span>Android Studio</span>
                    </div>
                    <div className="tecnologia">
                      <span>Python</span>
                    </div>
                    <div className="tecnologia">
                      <span>Html & css</span>
                    </div>
                    <div className="tecnologia">
                      <span>Javascript</span>
                    </div>
                    <div className="tecnologia">
                      <span>PHP</span>
                    </div>
                    <div className="tecnologia">
                      <span>Sql Server</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
