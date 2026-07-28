import { useState } from 'react'
function checkbox(){
  const[skills,setSkills]=useState([]);
  const handlecheckbox=(e)=>{
    const {value,checked}=e.target;
    if(checked){
      setSkills([...skills,value]);
    }
    else{
      setSkills(skills.filter((e)=>e!==value));
    }
  }
  return(
    <div>
    <h2>select skills</h2>
    <input type="checkbox" value="java" onChange={handlecheckbox} />java
    <input type="checkbox" value="react" onChange={handlecheckbox} />react
    <input type="checkbox" value="python" onChange={handlecheckbox} />python
    <h3>selected skills are:</h3>
    <p>{skills.join(",")}</p>
   
    </div>
  ); 

}
export default checkbox;