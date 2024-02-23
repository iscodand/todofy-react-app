import React from "react";
import './InputField.scss';

type Props = {

}

const InputField: React.FC<Props> = ({}) => {
    return (
        <div>
            <form>
                <input placeholder="Enter a task description" />
                
                <button type="submit">
                    Ok
                </button>
            </form>
        </div>
    )
}

export default InputField;