import {useState} from "react";

function Counter() {
    let [clicks, setClicks] = useState(0);
    let [text, setText] = useState("...");
    let [globalId, setGlobalId] = useState(3);

    let [users, setUsers] = useState([
        {
            id: 1,
            name: "Alex",
            age: 29
        },
        {
            id: 2,
            name: "Sergey",
            age: 24
        },
        {
            id: 3,
            name: "Vlad",
            age: 22
        },
    ]);

    function buttonPressMeClick() {
        clicks++;
        setClicks(clicks);
    }

    function inputOnChange(event) {
        setText(event.target.value);
    }

    function changeUsersClick() {
        globalId++;
        setGlobalId(globalId);

        let newUser = {
            id: globalId,
            name: text,
            age: Math.random()
        };

        setUsers([...users, newUser]);

        setText("");
    }

    return (
        <div>
            <h1>counter: {clicks}</h1>
            <button onClick={buttonPressMeClick}>Press me</button>
            <br/>
            <br/>

            <h2>{text}</h2>
            <input type="text" value={text} onChange={inputOnChange}/>
            <br/>
            <br/>

            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.id} | {user.name} | {user.age}</li>
                    })
                }
            </ul>
            <button onClick={changeUsersClick}>Add new user</button>
        </div>
    );
}

export default Counter;
