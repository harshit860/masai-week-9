import React from 'react'
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Order from './Order'
import Restraunts from './Restraunts'
import Final from './Final'
import Addres from './Addres'
import Contactus from './Contactus'

class Head extends React.Component{
        constructor(props) { 
                super(props)
                this.state = {
                    dummy:''
                }

        }
    render(){
        return(
            <Router>
            <div className="container-fluid">
                <div className="display-2 text-primary text-left border">{this.props.heading}</div>
                <div className="row">
                <div className="col-xl-2">

                            <Link to="/"><button className="border border-white btn  text-primary"><h3>All Restraunts</h3></button></Link>
                        </div>
                        <div className="col-xl-1">

                            <Link to="/order"><button className="border border-white btn  text-primary"><h4>Order</h4></button></Link>
                        </div>
                        <div className="col-xl-2">

                            <Link to="/Top"><button className="border border-white btn  text-primary"><h4>Top sellars</h4></button></Link>
                        </div>
                     
                        <div className="col-xl-2">
                            <Link to="/Add">    <button className="border border-white btn  text-primary"><h4>AddRestraunt</h4></button></Link>
                        </div>
                        <div className="col-xl-2">
                            <Link to="/Contact"><button className="border border-white btn  text-primary"><h4>Contact Us</h4></button></Link>
                        </div>
                        <div className="col-xl-1">
                            <Link to="/Orders"><button className="border border-white btn  text-primary"><h2>Final Order</h2></button></Link>
                        </div> 
                </div>
                <div className="row">
                       <Route path="/" exact render={()=><Restraunts />} />
                </div>
                <div>
                    <Route path="/order" exact render={()=><Order />} />
                </div>
                <div>
                    <Route path="/Orders" exact render={()=><Final />}/>
                </div>
                <div>
                    <Route path="/Contact" exact render={()=><Contactus />}/>
                </div>
                <div>
                        <Route path="/Add" exact render={()=><Addres />}/>
                </div>
            </div>
            </Router>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
            
            heading:state.heading,
            res_name:state.Restraunts
    }
}


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Head);