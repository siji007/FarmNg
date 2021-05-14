import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

import "../css/Home.css"
class Home extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="mt-0">
                <div className="text-white " id="homeWrappper">
                    <h1 className="font-bold " id="headerText">Experience True <br/> Agriculture</h1>
                    <button id="readMoreBtn" className="mt-8 btn text-success bg-white "><Link to="/about">Read More</Link></button>
                </div>
            </div>
            <div className="container mt-16">
                <div className="row">
                    <div className="col-lg-7">
                        <h1 className="font-bold text-4xl">A NEW WAY TO INVEST IN AGRICULTURE</h1>
                        <p id="introText" className="text-xl mt-4">Agriculture has always been a great form of investment and another form of earning a living through different ways.There are tons of new ideas coming up everyday on how to generate revenue through it</p>
                        <button className="mb-3 btn btn-success text-white mt-8">Read more</button>
                    
                    </div>

                    <div className="col-lg-5">
                    <img class="w-full" src="../images/chicken1.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"></div>
                            <p class="text-gray-700 text-base">
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}
export default Home;
