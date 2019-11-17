import resData from './defResData'
const check1 = (ind)=>(
    console.log("im in check"),
    {
        type:"check",
        ind
    }
)
const save = (val1,val2)=>
(
    {
type:"save",
val1,
val2
    }
)
const apidata = (data)=>(
    {
        type:"api",
        data
    }
)


const Addrestraunt = (resobj) =>(
    console.log(resobj+"calling me"),
    {
        type:"Add",
        resobj
    }
)
const dish_decide = (val) =>(
    console.log("in reducer"+val),
    {
        type:"dish_decide",
        val
    }
)
var mainobj={
   
    heading:"FOODQuik",
    reselect:'',
    disharry:[],
    total:0,
    Restraunts : [],
    res_name:'',
    order:[],
    cartshow:false
}
    

const reducer =(state=mainobj,action)=>{
    console.log('state inside reducer',state)
        if(action.type=="check")
        {
                    return {
                    
                        heading: state.heading,
                        reselect:action.ind,
                        Restraunts : state.Restraunts,
                        disharry:state.disharry,
                        total:state.total,
                        res_name:state.res_name,
                        order:state.order,
                        cartshow:state.cartshow
                    }
        }
        if(action.type=="api")
        {
                    return {
                    
                        heading: state.heading,
                        reselect:state.reselect,
                        Restraunts : action.data,
                        res_name:state.res_name,
                        disharry:state.disharry,
                        total:state.total,
                        order:state.order,
                        cartshow:state.cartshow
                    }
        }
        if(action.type=="save")
        {
            return{
                heading:state.heading,
                reselect:state.reselect,
                res_name:state.res_name,
                Restraunts:state.Restraunts,
                disharry:state.disharry,    
                order:[...state.order,action.val1],
                total:state.total+action.val2,
                cartshow:true
            } 
        }
        if(action.type=="Add")
        {
            return{
                heading:state.heading,
                reselect:state.reselect,
                disharry:state.disharry,
                Restraunts:[...state.Restraunts,action.resobj],
                total:state.total,
                res_name:state.res_name,
                order:state.order,
                cartshow:state.cartshow
            }
        }
        if(action.type =="dish_decide")
        {
            return {
                heading:state.heading,
                reselect:state.reselect,
                disharry:state.disharry,
                Restraunts:state.Restraunts,
                total:state.total,
                res_name:action.val,
                order:state.order,
                cartshow:state.cartshow
            }
        }
    return state;
}
export default reducer
export {check1,save,Addrestraunt,apidata,dish_decide}
