import React, { MouseEventHandler, useState } from "react"
import { NumberInput } from "../Components/NumberInput"

export function Form(){    

    const [numberOne, setNumberOne] = useState<number>(0);
    const [numberTwo, setNumberTwo] = useState<number>(0);
    const [operation, setOperation] = useState<number>(0);

    const ChangeNumberOne = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let number = + event.currentTarget.value;
        console.log(number);
        setNumberOne(number);
    }
    
    function ChangeNumberTwo(event: React.ChangeEvent<HTMLInputElement>){
        let number = + event.currentTarget.value;
        console.log(number);
        setNumberTwo(number);
    }
    
    function sinal(){
        switch (operation) {
            case 0:
                return "fa-solid fa-plus";
            case 1:
                return "fa-solid fa-minus";
            case 2:
                return "fa-solid fa-xmark";
            case 3:
                return "fa-solid fa-divide";
            default:
                break;
        }        
    }
    function ChangeOperation(){
        if (operation == 3) {
            setOperation(0);
        }
        else{
            setOperation(operation + 1);
        }
    }

    function calc(){
        switch (operation) {
            case 0:
                return numberOne + numberTwo;
            case 1:
                return numberOne - numberTwo;
            case 2:
                return numberOne * numberTwo;
            case 3:
                return numberOne / numberTwo;
            default:
                return 0;
                break;
        }
    }

    return (
        <div id="formId">
            <div id="inputGroup">
                <h1 style={{
                    textAlign: 'center'

            }}>OPERADOR</h1>
            <table>
                <tr>
                    <td><NumberInput changeValue = {ChangeNumberOne} value = {numberOne} /></td>
                    <td>
                        <button id="arrowIcon" onClick={ChangeOperation}>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                        <br/>
                        <button id="operationIcon">
                        <i className={sinal()}></i>
                        </button>
                    </td>
                    <td><NumberInput changeValue = {ChangeNumberTwo} value = {numberTwo} /></td>
                </tr>
            </table>
                <h2>
                    <table id= "sect">
                        <tr>
                            <td>
                                <span>RESULTADO: </span>
                            </td>
                            <td>
                                <button id="result">{calc()}</button>
                            </td>
                        </tr>
                    </table>
                </h2>
            </div>        
        </div>
    )
}