import Button from 'react-bootstrap/Button';

function User(){
    const username = 'Ola';
    const age = 24;

    const handleAlert = (event , name) => {
        console.log(event)
        alert(name ? name : "NO NAME SENT")
    }

    return(
        <>
         <h1>User Details</h1>
         <h3>Username : {username}</h3>
         <h3>Age : {age}</h3>
         <Button  variant="primary" onClick={(e) => handleAlert(e,'Mahmoud')}>Alert username 1</Button>
         <button className='btn btn-success mx-3' onClick={(e) => handleAlert(e , 'Asmaa')}>Alert username 2</button>
         <button onClick={handleAlert}>Alert username 3</button>
        </>
    )
}

export default User;