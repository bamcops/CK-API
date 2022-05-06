import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import UserCard from './UserCard';

 const  UserList = () => {
   const [users,setUsers] = useState();
   const [err,setErr]= useState(null);
   useEffect(() => {
    // function fetchdata(){
     // fetch("https://jsonplaceholder.typicode.com/users")
     // .then((res)=>(res.json()))
    // .then((res)=> setUser(res))
    // .catch((error)=> SetErr(error))
  //  }
  //fetchdata(); 

   //function fetchdata () {
    //axios
    //.get("https://jsonplaceholder.typicode.com/users")
    //.then((res)=>setUsers(res.data)
      // .catch((error)=>setErr(error))
   //    );
 // };
//fetchdata()
const fetchdata = async ()=> {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data)
} catch (error){
  setErr(error)}

}
fetchdata()

  },[]);

  
    
  return (
    <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
      {err ? ( <Spinner animation="border" /> ):(users && users.map((el)=><UserCard el={el}key ={el.id} />))}
  </div>
  )

};

export default  UserList
