import React from "react"
import { connect } from "react-redux"
import Axios from "axios"


class  Final extends React.Component{
    constructor(props){
        super(props)
        this.state={
                order_string:''
        }
    }
    componentDidMount(){
        var a = this.props.disharray.join(":")
        var send = a +" Total: "+ String(this.props.total1)
        this.setState({
            order_string:send
        })
    }
    send_order(){
            Axios({
                method:"post",
                url:"http://127.0.0.1:5000/order_history",
                data:{
                        name:this.state.order_string
                }
            })
            .then(resp=>{console.log(resp)})
            .catch(err=>{console.log(err)})
    }
    render(){
    
    let dishes =    this.props.disharray.map(a=>{
        return <div className="col">
        <h3>{a}</h3>
        
        </div>
    })
    console.log(this.state.order_string)
    return(
        <div className="">
            <div>{dishes}</div>
            <div><h3 className="display-2">{this.props.total1}</h3></div>
            <button className="btn btn-warning text-white" onClick={()=>this.send_order()}>Confirm Order</button>
        </div>
    )

}
}


const mapStateToProps=(state)=>{
    console.log(state)
    return{
                disharray:state.order,
                total1:state.total
    }
}

export default connect(mapStateToProps)(Final);