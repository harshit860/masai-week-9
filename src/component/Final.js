import React from "react"
import { connect } from "react-redux"


const Final = (props) =>{
    console.log(props)
    let dishes =    props.disharray.map(a=>{
        return <div className="col">
        <h3>{a}</h3>
        
        </div>
    })
    return(
        <div className="">
            <div>{dishes}</div>
            <div><h3 className="display-2">{props.total1}</h3></div>
            
        </div>
    )

}


const mapStateToProps=(state)=>{
    console.log(state)
    return{
                disharray:state.disharry,
                total1:state.total
    }
}

export default connect(mapStateToProps)(Final);