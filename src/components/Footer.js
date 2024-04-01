
const Footer = () => {
    const handleChangeInput = (e) => {
     console.log(e.target.value)
    }
    return(
        <>
         <h2>Footer Component</h2>
         <input onChange={handleChangeInput} />
         <br />
        </>
    )
    
}

export default Footer;