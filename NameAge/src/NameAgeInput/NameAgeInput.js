import React, { useState } from "react";

const NameAgeInput = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const nameAgeHandler = (event) => {
        event.preventDefault();
        
        if (name.trim() === ""){
            alert("Enter a Name");
            return;
        }

        if (age.trim() === "") {
            alert("Enter an Age");
            return;
        }
        
        if ( age < 0 ){
            alert("Enter Age no less than 0")
            return;
        }
        props.onSubmit({name: name, age: age});
        setName("");
        setAge("");
    }
    
    return (
        <form style={{textAlign: 'center'}}>
            <div>
                <label for="name">Name</label><br/>
                <input type="text" id="name" required value={name} onChange={nameHandler}/><br/>
                <label for="age">Age</label><br/>
                <input type="number" min="0" id="age" required value={age} onChange={ageHandler}/>
            </div>
            <div>
                <br/>
                <button type="submit" onClick={nameAgeHandler}>Submit</button>
            </div>
        </form>
    );
}

export default NameAgeInput;