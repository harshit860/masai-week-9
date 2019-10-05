import React from 'react'
import { connect } from "react-redux"
import {save} from './reducerfile'
const Order =(props)=>{
    console.log("im in order")
return(
    <div className="row ">
       <div >{props.dishes.map((a,index)=>{
         return <div onClick={()=>props.save1(index)} className="mt-3 ">
         <button className="btn btn-primary ml-1 text-left"><h1>{a}</h1></button>
         </div>
       })}</div>
    </div>
)
}
const mapStateToProps = (state) =>{
  
let num= state.reselect
  //console.log(num)
    return{
      dishes:state.Restraunts[num].dish
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    save1:(valuepass)=>dispatch(save(valuepass))
}
}


export default connect(
mapStateToProps,
mapDispatchToProps
)(Order);