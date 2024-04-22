import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="p-5">
      <Link to='/App'>{'<- Back'}</Link>
      <div></div>
      <Link to='/About'>{'Contact ->'}</Link>
      <h1>Contact Page</h1>
    </div>
  )
}


export default Contact