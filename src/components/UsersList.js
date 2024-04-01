import React from 'react';

class UsersList extends React.Component {
    constructor() {
        super();
        console.log("CONST.")
        this.state = {
            name : "Ahmed",
            age : 27,
            tools : ['JS' , 'Node']
        }
    }

    componentDidMount() {
        console.log("DID MOUNT")
        // CALL API
    }

    componentDidUpdate() {
        console.log('DID Update' , this.state.name)
    }

    componentWillUnmount() { }

    changeName = () => {
      // this.state.name = 'Omnia' XXXXX
      this.setState({
        name : 'Omnia'
      })
    }

    render() {
        return (
            <>
                <h1>Hello From Class Component</h1>
                <h3>User data</h3>
                <p>name : {this.state.name}</p>
                <p>age : {this.state.age}</p>
                <button onClick={() => this.changeName()}>Change name</button>
            </>
        )
    }
}

export default UsersList;