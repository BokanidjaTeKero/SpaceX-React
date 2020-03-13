import React from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div className='home'>
            <section className='header'>
                <div className='header-img'>
                    <Fade>
                        <h1>
                            We can go even further
                        </h1>
                    </Fade>
                </div>
                <Fade>
                    <div className='header-text'>
                        <h3>ADVANCING THE FUTURE</h3>
                            <p>
                                As one of the world’s fastest growing providers of launch services,
                                SpaceX has secured over 100 missions to its manifest, representing over 
                                $12 billion on contract. These include commercial satellite launches as well
                                as US government missions. SpaceX’s Dragon spacecraft is flying numerous cargo 
                                resupply missions to the space station under a series of Commercial Resupply Services
                                contracts. Dragon was designed from the outset to carry humans to space and will soon
                                fly astronauts under NASA’s Commercial Crew Program.

                                Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next
                                generation of fully reusable launch vehicles that will be the most powerful ever built,
                                capable of carrying humans to Mars and other destinations in the solar system.
                            </p>
                    </div>
                </Fade>
            </section>
            <section className='main-one'>
                <Fade>
                    <div className='main-one-text'>
                        <h3>THE WORLD'S MOST POWERFUL ROCKET</h3>
                        <p>
                            WITH MORE THAN 5 MILLION POUNDS OF THRUST AT LIFTOFF, Falcon Heavy is the most
                            capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy
                            equals approximately eighteen 747 aircraft at full power. Below is a comparison
                            chart of the world’s heavy lift vehicles, based on historical launch data. Falcon
                            Heavy can lift the equivalent of a fully loaded 737 jetliner--complete with passengers,
                            luggage and fuel--to orbit.  Only the Saturn V moon rocket, last flown in 1973, delivered
                            more payload to orbit than Falcon Heavy.
                        </p>
                    </div>
                </Fade>
                <Fade left>
                    <div className='main-one-img'></div>
                </Fade>
            </section>
            <section className='main-two'>
                <div className='main-two-text'>
                    <Fade left>
                        <h3>THE SUIT</h3>
                        <p>
                            Designed in-house by SpaceX, each custom-tailored suit is meant to provide a pressurized
                            environment for all crew members aboard Dragon in atypical situations such as cabin
                            depressurization. This suit also routes communications and cooling systems to the astronauts
                            aboard during regular flight. Additional features include the following:
                            <br/><br/>
                            ▪ 3D printed space suit helmet
                            <br/><br/>
                            ▪ Touchscreen compatible gloves
                            <br/><br/>
                            ▪ Flame resistant outer layer
                            <br/><br/>
                            ▪ Hearing protection during ascent and reentry
                            <br/><br/>
                            ▪ Single connection point between the suit and vehicle
                            <br/><br/>
                            ▪ Heel sliders securing feet to footrest
                        </p>
                    </Fade>
                </div>
                <Fade right>
                    <div className='main-two-img'></div>
                </Fade>
               
            </section>
            <section className='footer'>
                <div className='footer-img'></div>
                    <Fade>
                        <div className='footer-text'>
                            <p>
                                SpaceX designs, manufactures and launches
                                advanced rockets and spacecraft. The company was founded in 2002 to
                                revolutionize space technology, with the ultimate goal of enabling people
                                to live on other planets.
                            </p>
                        </div>
                    </Fade>
            </section>
        </div>
    )
}

export default Home;