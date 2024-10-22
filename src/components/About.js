import User from "./User";
import Userclass from "./Userclass";
const About = () =>{
return (
    <div>
         <h1> About </h1>
         <h2> Food ordering app for react project</h2>
         <h3> topics covered : hooks, router, test projects</h3>

         <Userclass name={"Passing props from class"} location = {"Chennai , Adhanur"}/>
    </div>
   
)
}

export default About;