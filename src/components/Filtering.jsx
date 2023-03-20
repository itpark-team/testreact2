import React, {useEffect} from 'react';
import {useState} from "react";

const Filtering = () => {

    let [filterText, setFilterText] = useState("");

    let startedArray = [
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
    ];

    let [users, setUsers] = useState([...startedArray]);

    function filterUsers() {
        if (filterText === "") {
            return startedArray;
        } else {
            return startedArray.filter(user => user.name.includes(filterText));
        }
    }

    useEffect(() => {
        let filteredUsers = filterUsers();
        console.log(filteredUsers);
        setUsers(filteredUsers);
    }, [filterText]);

    // const filterUsers = (event) => {
    //     let searchText = event.target.value;
    //     setFilterText(searchText);
    //
    //     if (searchText === "") {
    //         setUsers(startedArray);
    //     } else {
    //         let filteredUsers = startedArray.filter(user => user.name.includes(searchText));
    //         setUsers(filteredUsers);
    //     }
    // }

    return (
        <div>
            <div>
                <input type="text" value={filterText} onChange={(event) => setFilterText(event.target.value)}/>
            </div>

            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.id} | {user.name} | {user.age}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Filtering;