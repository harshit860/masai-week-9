import React from 'react'
import { connect } from "react-redux"
import {Addrestraunt} from './reducerfile'
import {Redirect,BrowserRouter} from 'react-router-dom'
import axios from "axios"
class Addres extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    restraunt_name:'',
                    rating:'',
                    cuisines:'',
                    image_url:'',
                        dish:'',
                        dishcost:'',
                        
                }
            }
            handleChange=(val)=>{
                this.setState({
                    [val.target.name]: val.target.value
                })
                        console.log(this.state.restraunt_name)
                        console.log(this.state.cuisines)
            }   

            addres(){
                
                axios({
                    method:"post",
                    url:"http://127.0.0.1:5000/create_res",
                    data:{
                        restraunt_name:this.state.restraunt_name,
                        rating:this.state.rating,
                        cuisines:this.state.cuisines,
                        image_url:this.state.image_url,
                        location:"bangalore"
                    }
                })
                .then(resp=>{
                    
                    console.log(resp)})
                .catch(err=>{console.log(err)})
                
            }
            add_dish(){
                    axios({
                        method:"post",
                        url:"http://127.0.0.1:5000/add_dish",
                        data:{
                            restraunt_name:this.state.restraunt_name,
                            dish_name : this.state.dish,
                            dish_cost : this.state.dishcost
                        }
                    })
                    .then(resp =>{console.log(resp)})
                    .catch(err=>{console.log(err)})
            }
            render(){
                console.log(this.props)
                return(
                    <BrowserRouter>
                    <div className="row  text-left">
                    
                        <div className="offset-4" >
                           <div>
                           <div className="col-xl-12 text-left ">
                                <label>Enter Restraunt Name</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"restraunt_name"} className="ml-3" ></input>
                            </div>
                            <div className="col-xl-12 text-left">
                                <label>Enter Restraunt rating</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"rating"} className="ml-3"></input>
                            </div>
                            <div className="col-xl-12 text-left">
                                <label>Enter Restraunt cuisines</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"cuisines"} className="ml-3" ></input>
                            </div>
                            <div className="col-xl-12 text-left">
                                <label>Enter Restraunt image url</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"image_url"}className="ml-3"></input>
                            </div>
                            <div className="col-xl-12 text-left">
                                <label>Enter Restraunt dish</label>
                                <input onChange={(ev)=>this.handleChange(ev)} placeholder="dish price-next_dish price" name={"dish"}className="ml-3 bg-warning "></input>
                                
                            </div>
                            <div className="col-xl-12 text-left">
                                <label>Enter Restraunt dishes Cost</label>
                                <input onChange={(ev)=>this.handleChange(ev)} placeholder="dish1cost,dish2cost" name={"dishcost"}className="ml-3 bg-warning"></input>
                            </div>
                            <button className="btn btn-warning " onClick={()=>this.add_dish()}>Add dish </button>
                           </div>
                            
                           
                       </div><br></br>
                       <button onClick={()=>this.addres()} className="btn btn-success col-xl-3 h-25 offset-4">Add Restraunt</button>
                    </div>
                    
                   </BrowserRouter>
                )
            }
}

// const mapStateToProps = (state) =>{
//     return{

//     }
// }

const mapDispatchToProps =(dispatch)=>{
    return({
        Restraunt:(obj)=>dispatch(Addrestraunt(obj))
    })
}
export default  connect(
    null,
    mapDispatchToProps
)(Addres)