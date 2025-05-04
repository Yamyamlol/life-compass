interface propType{
    style:string,
    label:string
}

export const SubHeading=({style,label}:propType)=>{
    return(
        <div>
        <h4 className={`${style}`}>{label}
        </h4>
    </div>
)
}
    