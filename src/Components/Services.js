import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../css/services.css"
class Services extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="mt-16 pt-20 container">
                <h1 className="text-center font-bold text-4xl ">We Give You The Best In This Field</h1>
                <p className="text-2xl text-center mt-8">Bringing relieable and standard services to you at a reasonable rate</p>
                
                <div className="row mt-8 mr-auto ml-auto md:text-center sm:text-center">
                    <div className="col-lg-4 mb-8 ">
                        <h1 className="font-bold text-3xl">Agricultural Products</h1>
                        <p className="text-lg">We produce wide variety of products<br/>
                        through crops which are turned to<br/> cereal,ehanol produced from and<br/> many more.
                        </p>
                    </div>
                    <div className="col-lg-4 mb-8 ">
                        <h1 className="font-bold text-3xl">Dairy Products</h1>
                        <p className="text-lg">Quality dairy products such as<br/> yogurt, cheese and butter from<br/>
                        animal are also available.
                        </p>
                    </div>

                    <div className="col-lg-4 mb-8 ">
                        <h1 className="font-bold text-3xl">Organic Fertilizers</h1>
                        <p className="text-lg">Organic fertilizers which are <br/>
                        gotten from animal and byproducts<br/>
                        to realease nutrients to the soil is<br/>
                        also available.
                        </p>
                    </div>
                </div>
            </div> 

            <div className="mb-0">
                <div className="mt-8 text-white" id="wrapper" >
                    <h1 className="text-center pt-10 text-3xl">Services we offer</h1>
                        <div className="flex container justify-around mt-8">
                            <div className="">
                                <h1 id="serviceHeader" className="font-bold text-3xl">Planting</h1>
                                <p className="text-xl">We offer effective planting services to our client by<br/> taking appropriate measures</p>
                            </div>
                            <div className="">
                                <h1 id="serviceHeader" className="font-bold text-3xl">Garden CleanUp</h1>
                                <p className="text-xl">We are the best when it comes to cleaning up your garden</p>
                            </div>
                            <div className="">
                                <h1 id="serviceHeader" className="font-bold text-3xl ml-4">Healthy Milk</h1>

                                <p className="text-xl ml-4">We provide milk through our diary products</p>
                            </div>
                            <div className="">
                                <h1 id="serviceHeader" className="font-bold text-3xl ml-2">Fumigation</h1>

                                <p className="text-xl ml-2">Farm Ng gives a high quality fumigation service</p>
                            </div>
                            <div className="">
                                <h1 id="serviceHeader" className="font-bold text-3xl ml-2">Vertinary</h1>
                                <p className="text-xl ml-3">We ensure that animals are well taken care of to prevent animal diseases or treating the ones that are infected</p>
                            </div>
                        </div>
                </div>
            </div>
            
            </Fragment>
        );
    }
}

export default Services;



