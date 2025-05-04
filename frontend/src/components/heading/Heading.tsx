interface propType{
    style:string,
    label:string
}

export const Heading=({style,label}:propType)=>{
    return(
        
        <div>
        <h1 className={`${style}`}>
        {label}
        </h1>
    </div>
    )
}