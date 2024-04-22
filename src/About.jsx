import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5" style={{backgroundColor: "lightgreen"}}>
      <Link className="text-dark" to='/'>{'<- Back'}</Link>
      <div></div>
      <Link className="text-dark" to='/contact'>{'Contact ->'}</Link>
      <h1>About Page</h1>
      <div style={{color: "blue"}}>
        <p>Click contact to go to contacts</p>
      </div>
    </div>
  )
}


export default About
