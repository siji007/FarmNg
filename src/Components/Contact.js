import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
class Contact extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="row mr-auto ml-auto pt-20">
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                    <div className="min-h-screen py-10 flex flex-col ">
                        <form id="reportForm" className="p-12 bg-white mx-auto my-10 shadow-md rounded" action="#">
                            <div className="space-y-6 mb-2">
                                <h1 style={{fontWeight:"bold"}} className=" text-3xl">Contact Us</h1>
                                <h1 className="text-xl text-muted">State whatever services you are looking for</h1>
                                <div>
                                    <input className="leading-tight border text-2xl w-full py-2 px-4 mt-2" type="name" id="name" name="name" placeholder="Enter Your Name"/>
                                </div>
                                <div>
                                    <input className="leading-tight border text-2xl w-full py-2 px-4 mt-2" type="email" id="email" name="email" placeholder="Enter Your Email Address"/>
                                </div>
                                <div>
                                    <textarea className="text-2xl mt-4 p-4" id="compaintBox" cols="33" rows="12" placeholder="Tell us what's on your mind"></textarea>
                                </div>
                                <div>
                                    <button id="tryAgainBtn" className=" text-white w-full py-3 text-xl btn-success font-bold mt-4"> <Link style={{textDecoration:"none",color:"white"}}>Submit</Link></button>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>

                {/* <div className="col-lg-4" >
                    <img id="sheepDiv" style={{height:"200px;"}}
                        className="d-block w-100"
                        src="../images/sheep.jpg"/>
                </div> */}
            </div>
            </Fragment>
        );
    }
}

export default Contact;