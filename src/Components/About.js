import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../css/about.css"
class About extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="mt-10 container">
                <h1 className="text-xl">About Us</h1>
                <p className="font-bold text-4xl mt-10">Leading Africa company in redenring<br/> agricultural services</p>

                <p className="text-xl mt-4">Farmg ng brings provides easy and<br/> efficient way of taking good care of<br/> your farm and lot more.</p>

                <div className="row mt-4">
                    <div class=" shadow-lg col-lg-6 col-md-12 mb-3">
                        <img class="w-full" src="../images/cow1.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"></div>
                            <p class="text-gray-700 text-base">
                            
                            </p>
                        </div>       
                    </div>

                    <div class=" shadow-lg col-lg-6 col-md-12 ">
                        <img id="aboutImg2" class="w-full " src="../images/g2.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"></div>
                            <p class="text-gray-700 text-base">
                            {/* Saves time.  */}
                            </p>
                        </div>       
                    </div>
                </div>

                

            </div>


            <div className="bg-gray-400 pb-8">
            <div id="contentDiv" className="row mt-8  mr-auto ml-auto">
                <div className = "col-lg-4">
                    <h1 className="text-success text-2xl mt-8">Why Choose Us?</h1>
                    <p className="font-bold text-3xl mt-4">We Provide<br/> Quality and <br/> effiecient Products</p>
                </div>

                <div className="col-lg-4 text-xl">
                <p className="mt-20">Farm Ng is built to provide quality and 
                relieable services to fellow agriculturers.
                It also deal with agricultural products such as
                agricultural produce (those of plant and animal origin),
                agricultural equipment and machinery, agrochemicals, 
                agricultural jobs and agricultural services.
                </p>
                </div>
                
                <div className="col-lg-4 text-xl">
                <p className="mt-20">Farm NG main goal is to become 
                the leading company in africa that
                render the best agricultural services.
                </p>
                </div>
            </div>
            </div>
            
            
            </Fragment>
        );
    }
}

export default About;


