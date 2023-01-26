import React, {  useState, useEffect } from "react";
import { Container } from "react-materialize";
import { UserCard } from "./UserCard";



export default function Albums() {


    const [data, setData] = useState([]);
   

    function fetchUsers() {
        try{
        fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => response.json())
            .then(json => setData(json))
            
        }catch(e){
            alert(e)
        }
    }


    
    useEffect(() => {
        if(localStorage.getItem("name")==null){
            window.location.replace('/');
          }
        fetchUsers()
        
        
    }, [])

  return (
    <>
     
      <Container className="container">
         
            {data?.map((item) => (
             <div class="col s4">
                <UserCard key={item.id} user={item}  />
              </div>
            ))}
          
        
      </Container>
    </>
  );
}
