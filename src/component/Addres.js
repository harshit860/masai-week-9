import React from 'react'
import { connect } from "react-redux"
import {Addrestraunt} from './reducerfile'

class Addres extends React.Component{
            constructor(props){
                super(props)
                this.state={
                        restraunt_name:'',
                        rating:'',
                        cuisines:'',
                        url:'',
                        dish:[],
                        dishcost:[],
                        restraunt_obj:[]
                }
            }
            handleChange=(val)=>{
                this.setState({
                    [val.target.name]: val.target.value
                })
                        console.log(this.state.restraunt_name)
                        console.log(this.state.cuisines)
            }   

            handleSubmit = (e) => {
                e.preventDefault();
                // this.setState({
                //     restraunt_obj: [...this.state.restraunt_obj, this.state],
                    
                // })
                let x=this.state
                console.log(x)
                this.props.Restraunt(x)
            }
            render(){
                console.log(this.props)
                return(
                    <div className="row  text-left">
                    
                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <div className="col-xl-12 ">
                                <label>Enter Restraunt Name</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"restraunt_name"} className="ml-3" ></input>
                            </div>
                            <div className="col-xl-12">
                                <label>Enter Restraunt rating</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"rating"} className="ml-3"></input>
                            </div>
                            <div className="col-xl-12">
                                <label>Enter Restraunt cuisines</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"cuisines"} className="ml-3" ></input>
                            </div>
                            <div className="col-xl-12">
                                <label>Enter Restraunt image url</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"url"}className="ml-3"></input>
                            </div>
                            <div className="col-xl-12">
                                <label>Enter Restraunt dish</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"dish"}className="ml-3"></input>
                            </div>
                            <div className="col-xl-12">
                                <label>Enter Restraunt dishes Cost</label>
                                <input onChange={(ev)=>this.handleChange(ev)} name={"dishcost"}className="ml-3"></input>
                            </div>
                            <input className="btn btn-danger ml-2" type={"submit"} value={"feed"}></input>
                           
                       </form>
                    </div>
                   
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