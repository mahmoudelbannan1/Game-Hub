import { useEffect, useState } from 'react';

function UsersListFun() {

    const [username, setUsername] = useState('Ola');
    const [user, setUser] = useState({
        name: "Esraa",
        age: 24,
        tools: ['JS', 'node', 'html']
    })

    const changeName = () => {
        // username = 'Ahmed' XXXX
        // setUsername('Ahmed')
        setUser({
            ...user,
            name: 'Aya'
        })
    }

    useEffect(() => {
        console.log('USEEFFECT', 'DID MOUNT')
        return () => {
            console.log("USEEFFECT", 'WILL UNMOUNT = DESTROY')
        }
    }, [])

    useEffect(() => {
        console.log('USEEFFECT', 'DID UPDATE')
    }, [user])


    useEffect(() => {
        console.log('USEEFFECT', 'DID UPDATE')
    }, [username])

    return (
        <>
            <h2>Hello From Functional Component</h2>
            <p>name : {user.name}</p>
            <p>age : {user.age}</p>
            <button onClick={() => changeName()}>Change name</button>
        </>
    )
}

export default UsersListFun;