import React from 'react'
import { connect } from "react-redux"
import {save} from './reducerfile'
import axios from "axios"
class  Order  extends React.Component{
  constructor(props){
    super(props)
    this.state={
          dish_arr:[]
    }
  }
  order(name,price){
    this.props.save1(name,price)

  }
  componentDidMount(){
    axios({
      method:"post",
      url:"http://127.0.0.1:5000/get_dish",
      data:{
          restraunt_name:this.props.res_name1
      }
  })
  .then(resp=>{
     this.setState({
       dish_arr:resp.data.dishes
     })
      console.log(resp)})
  .catch(err=>{console.log(err)})
  }
  render()
  {
    console.log(this.state.dish_arr)
return(
    <div className="row offset-5">
       <div >{this.state.dish_arr.map((a,index)=>{
        return <div  className="mt-3 ">
         <button onClick={()=>this.order(a.dish_name,Number(a.dish_cost))} className="btn btn-primary ml-1 text-left"><h1>{a.dish_name}</h1></button>
         <h4>{a.dish_cost}</h4>
         </div>
        })}</div>
    </div>
)
}
}
const mapStateToProps = (state) =>{
  
let num= state.reselect
  console.log(state)
    return{
      dishes:state.disharry[state.reselect],
      res_name1:state.res_name
      

    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    save1:(val1,val2)=>dispatch(save(val1,val2))
}
}


export default connect(
mapStateToProps,
mapDispatchToProps
)(Order);