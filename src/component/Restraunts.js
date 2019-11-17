import React from 'react'
import { connect } from "react-redux"
import {check1,apidata,save,dish_decide} from './reducerfile'
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Restraunts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                
        }
    }
    componentDidMount(){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/showres"
        })
        .then(resp=>{
            this.props.send(resp.data.restraunts)
            console.log(resp)})
        .catch(err =>{console.log(err)})
    }


    render() {
        
        let b = this.props.res_name.map((a, index) => {
            return <Link to="/Order"><div className="col-xl-5 ml-4 mt-5 text-left" onClick={() =>this.props.pass_name(a.restraunt_name)}>
                <img style={{ width: "400px" }} src={a.image_url}></img>
                <h3 className="text-left text-primary">{a.restraunt_name}</h3>
                <h2>{"Rating: " + a.rating}</h2>
            </div>
            </Link>
        })
        return (
    
<div className="row border ">
        {b}
</div>
)
}
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        res_name:state.Restraunts
    }
}

const mapDispatchToProps =(dispatch)=>{
    return({
        check:(index)=>dispatch(check1(index)),
        send:(val)=>dispatch(apidata(val)),
        save1:(valuepass)=>dispatch(save(valuepass)),
        pass_name:(val)=>dispatch(dish_decide(val))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Restraunts);