import { Link } from "react-router-dom"
import React from "react"
import { Container } from "react-bootstrap"

function Contact() {
  return (
    <div className="p-5 bg-success">
      <Link className="text-light" to='/'>{'<- Counter'}</Link>
      <div></div>
      <Link className="text-light" to='/About'>{'<- About'}</Link>
      <h1>Contact Page</h1>
      <div>
        <Container maxWidth = "xs">
            <div style={{backgroundColor: "lightblue", height: "20rem", width: "150px"}}>
                Jay Miller
                <br></br>
                Brandon Heisler
                <br></br>
                Caitlin Schaeffer
                <br></br>
                Cody Miller
                <br></br>
                Duke McClellan
                <br></br>
                Eoin Mcdonnell
                <br></br>
                Henry Knollenberg
                <br></br>
                Jacinta Helm
                <br></br>
                Maddie Carlson
                <br></br>
                Nathan Wilson
                <br></br>
                Neal Sharma
                <br></br>
                Owen Coombs
                <br></br>
                Ryan Anderson 
            </div>
        </Container>
      </div>
    </div>
  )
}


export default Contact