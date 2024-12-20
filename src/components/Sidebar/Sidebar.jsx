import { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';


const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  background-color: #e2e8f0;
  color: rgba(255, 255, 255, 0.87);
}

  body {
    --color-sidebar-background-dark-default: #202127;
    --color-sidebar-background-dark-hover: #2D2E34;
    --color-sidebar-background-dark-active: #393A3F;
    --color-text-dark-default: #f0f2ff;npm install styled-components
    --color-text-dark-hover: #f0f2ff;
    --color-text-dark-active: #f0f2ff;
    --color-text-logo-dark-default: #3B82F6;
    --color-button-background-dark-default: #202127;
    --color-button-background-dark-active: #4B5966;

    --color-sidebar-background-light-default: #fff;
    --color-sidebar-background-light-hover: #f0f2ff;
    --color-sidebar-background-light-active: #f0f2ff;
    --color-text-light-default: #97a5b9;
    --color-text-light-hover: #091b31;
    --color-text-light-active: #0000b5;
    --color-text-logo-light-default: #0000b5;
    --color-button-background-light-default: #fff;
    --color-button-background-light-active: #e2e8f0;
  }
`;


// Определяем стили для контейнера боковой панели
const Container = styled.div`
    background-color: var(${({ color }) => color === 'light' ? '--color-sidebar-background-light-default' : '--color-sidebar-background-dark-default'});
    width:  ${({ isOpened }) => (isOpened ? `250px` : ` 70px`)};

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    transition: all 1s ease-in-out;
    justify-content: space-around;
    position: relative;

    

  
    > div:nth-child(2){
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    cursor:pointer;
    font-size: 1.5rem;
    justify-content: ${({ isOpened }) => (isOpened ? `` : `center`)};
   
     transition: all 1s ease-in-out;
     animation: upImg .3s  ease-in-out;
                @keyframes upImg {
                    0% { transform: translateY(-150%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }        

    img{
        width: 40px;                
        
     }
    }
    
    span {
        color: var(${({ color }) => color === 'light' ? '--color-text-logo-light-default' : '--color-text-logo-dark-default'});
        font-weight: 700;
          display: ${({ isOpened }) => (isOpened ? `flex;` : ` none`)};
          
          
      }
     svg {
      cursor: pointer;
      color: var(${({ color }) => color === 'light' ? '--color-text-light-default' : '--color-text-dark-default'});
    }
  
  // Стилизация списка ссылок
   > div:nth-child(3) {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;



    
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 1s ease-in-out;
      padding:12px;
      border-radius: 6px;
      cursor: pointer;
      justify-content: ${({ isOpened }) => (isOpened ? `` : ` center`)};

      
    animation: ani 1s forwards;
    @keyframes ani {
        0% { transform: translateY(-150%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }

          &:hover {
                        background-color: var(${({ color }) => color === 'light' ? '--color-sidebar-background-light-hover' : '--color-sidebar-background-dark-hover'});
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                         span {
                          color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                        }
                        svg {
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                        }
                }
       &:active {
                        background-color: var(${({ color }) => color === 'light' ? '--color-sidebar-background-light-active' : ' --color-sidebar-background-dark-active'});
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : ' --color-text-dark-active'});
                         span {
                          color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : ' --color-text-dark-active'});
                        }
                        svg {
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : '--color-text-dark-active'});
                        }
                    }
      
      svg {
        color: var(${({ color }) => color === 'light' ? '--color-text-light-default' : '--color-text-dark-default'});
      }
      
      span {
        color: var(${({ color }) => color === 'light' ? '--color-text-light-default' : '--color-text-dark-default'});
         font-weight: 700;
        display: ${({ isOpened }) => (isOpened ? `flex;` : ` none`)};
         animation: list 1.3s  ease-in-out;
        @keyframes list {
                            0% { transform: translateY(-50%); opacity: 0; }
                            100% { transform: translateY(0); opacity: 1; }
                        } 


      }
    }
  }
    > div:nth-child(4){
            display: flex;
            flex-direction: column;
            gap: 15px;
            color: #333;
            width: 80%;
            
            
            div{
                display: flex;
                align-items: center;
                gap: 10px;
                border-radius: 6px;
                cursor: pointer;
                transition: all 1s ease-in-out;
                padding: 12px;
                justify-content: ${({ isOpened }) => (isOpened ? `` : ` center`)};
                animation: up 1s forwards;
                @keyframes up {
                    0% { transform: translateY(150%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }


                  &:hover {
                        background-color: var(${({ color }) => color === 'light' ? '--color-sidebar-background-light-hover' : '--color-sidebar-background-dark-hover'});
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                         span {
                          color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                        }
                        svg {
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-hover' : '--color-text-dark-hover'});
                        }
                }
                   &:active {
                        background-color: var(${({ color }) => color === 'light' ? '--color-sidebar-background-light-active' : ' --color-sidebar-background-dark-active'});
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : ' --color-text-dark-active'});
                         span {
                          color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : ' --color-text-dark-active'});
                        }
                        svg {
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : '--color-text-dark-active'});
                        }
                    }

                    svg {
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-default' : '--color-text-dark-default'});
                    }
                    
                    span {
                    &:active{
                      color: var(${({ color }) => color === 'light' ? '--color-text-light-active' : ' --color-text-dark-active'});
                    }
                        color: var(${({ color }) => color === 'light' ? '--color-text-light-default' : '--color-text-dark-default'});
                         font-weight: 700;
                        display: ${({ isOpened }) => (isOpened ? `flex;` : ` none`)};
                         transition: all 1.5s ease-in-out;
                         animation: listUp 1.3s  ease-in-out;
        @keyframes listUp {
                            0% { transform: translateY(50%); opacity: 0; }
                            100% { transform: translateY(0); opacity: 1; }
                        } 
                    }
      
            }
    }
`;



// Дополнительная логика для анимации открытия/закрытия боковой панели
const ToggleButton = styled.div`
    position: absolute;
    top: 115px;
    right: ${({ isOpened }) => (isOpened ? '-10px' : '-80%')};
   
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 99;
    transition: all 1s ease-in-out;
    
    svg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding:6px;
        width:20px;
        height:20px;
        border-radius: 50%;
        background-color: var(
            ${({ color, isOpened }) => 
            color === 'light' && isOpened ? '--color-button-background-light-active' :
            color === 'light' ? '--color-button-background-light-default' :
            color !== 'light' && !isOpened  ? '--color-button-background-dark-default' :
            '--color-button-background-dark-active'
            }
        );

        animation: arrow 1.3s  ease-in-out;
                @keyframes arrow {
                    0% { transform: translateX(200%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }     

        &:active{
         background-color: var(${({ color }) => color === 'light' ? ' --color-button-background-light-active' : '--color-button-background-dark-active'});

        }
    }
    
 
}

  
`;

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = ({ color }) => {
    const [isOpened, setIsOpened] = useState(true); // По умолчанию боковая панель открыта

    const toggleSidebar = () => {
        setIsOpened(prevState => !prevState);
    };

    return (
        <>
            <GlobalStyles />
            <Container color={color} isOpened={isOpened}>
                <ToggleButton color={color} isOpened={isOpened} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                </ToggleButton>
                <div>
                    <img src={logo} alt="TensorFlow logo"/>
                    <span>TensorFlow</span>
                </div>
                <div>
                    {
                        routes.map(route => (
                            <div
                                key={route.title}
                                onClick={() => {
                                    console.log(`going to "${route.path}"`);
                                }}
                            >
                                <FontAwesomeIcon icon={route.icon}/>
                                <span>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        bottomRoutes.map(route => (
                            <div
                                key={route.title}
                                onClick={() => {
                                    console.log(`going to "${route.path}"`);
                                }}
                            >
                                <FontAwesomeIcon icon={route.icon}/>
                                <span>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    );
};

Sidebar.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};

export default Sidebar;
