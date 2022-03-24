function Reducers(state = [],action:any) 
{
    switch(action.type) {
        case "ADD":
            return [...state, action.payload]
            break;
        case "REMOVE":
            return state.filter((item:any)=>{
                return action.id !== item.id
            })
            break;
        case "CHECK":
            return state.map((item:any)=>{
                if(item.id === action.id)
                    return {...item, cheked: !item.cheked}
                else
                    return item
            })
            break;
        default:
            return state
            break;
    }
}

export default Reducers