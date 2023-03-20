import React, {useState} from 'react';

const Hello = ({name, title, descr, arr, func}) => {

    let [data, setData] = useState("data");

    function inputOnChange(event) {
        setData(event.target.value);
        console.log("press");
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" value={data} onChange={inputOnChange}/>
            <button onClick={() => func(data)}>hurray</button>
        </div>
    );
};

export default Hello;