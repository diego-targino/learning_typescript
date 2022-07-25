
type numberProps ={
    value: number,
    changeValue : React.ChangeEventHandler<HTMLInputElement>
}
export function NumberInput(props : numberProps){
    return (
        <div>
            <input type ="Number" onChange={props.changeValue} value = {props.value}></input>
        </div>
    )
}