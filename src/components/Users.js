import React, {useState, useEffect} from 'react';

function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
           <h1>Users: <ul>
                        {users.map(user => <li>{user.name}</li>)}
               </ul>
               </h1>
        </div>
    );
}

export default Users;