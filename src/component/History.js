import React from "react"
import axios from "axios"
class Hisotry extends React.Component{
    constructor(props){
        super(props)
        this.state={
                history_arr:[]
        }
    }
    componentDidMount(){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/get_history"
        })
        .then(resp=>{
            this.setState({
                history_arr:resp.data.order_history
            })
            console.log(resp)})
        .catch(err=>{console.log(err)})
    }
    render(){
        let disp = this.state.history_arr.map((a,i)=>{
            return <div className="col-xl-12 row">
                <h1>{i+1}</h1>
                <h1 className="ml-4">{a.name}</h1>
            </div>
            
        })
        return(
            <div>
                    {disp}
            </div>
        )
    }
}export default Hisotry