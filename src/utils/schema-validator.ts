export const getErrorMessageByPropertyName =(obj:Record<string,any>,propertyPath: string) => {
    console.log("🚀 ~ file: schema-validator.ts:2 ~ getErrorMessageByPropertyName ~ obj:", obj)
    // let obj = errors
    // let propertyPath = "admin.name.firstName"
    // let propertyPath = "admin.name.lastName"
    const properties = propertyPath.split(".");
    // ["admin","name","firstName"]
    // ["admin","name","lastName"]
    let value=obj
    for(let prop of properties){
        if(value[prop]){
            value=value[prop]
        }else{
            return undefined
        }
    }
    console.log("🚀 ~ file: schema-validator.ts:10 ~ getErrorMessageByPropertyName ~ value:", value)
    
    return value.message
}