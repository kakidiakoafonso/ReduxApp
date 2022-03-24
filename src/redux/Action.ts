export function Add (payload:any)
{    return {
        type:"ADD",
        payload
    }
}
export function Remove (id:string)
{    return {
        type:"REMOVE",
        id
    }
}
export function Check (id:string)
{    return {
        type:"CHECK",
        id
    }
}