import React from 'react'
import { connect } from "react-redux"
import {check1} from './reducerfile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Restraunts = (props)=>{
   let b= props.res_name.map((a,index)=>{
        return <Link to="/Order"><div className="col-xl-4 ml-5 mt-5 text-left" onClick={()=>props.check(index)}>
                <img style={{width:"400px"}} src={a.url}></img>
                  <h3 className="text-left text-primary">{a.restraunt_name}</h3>
            </div>
            </Link>
       })
return(
<div className="row border">
        {b}
</div>
)
}

const mapStateToProps = (state) =>{
    return{
        res_name:state.Restraunts
    }
}

const mapDispatchToProps =(dispatch)=>{
    return({
        check:(index)=>dispatch(check1(index))
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Restraunts);