import React, {  useState, useEffect } from "react";
import { Container, Row } from "react-materialize";
import { AlbumCard } from "./AlbumCard";
import avatar from '../assets/avatar.png'
import { useNavigate } from "react-router-dom";




export default function UserAlbums() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [user, setUser] = useState({})
    const [prev, setPrev] = useState("")
    
    
    function fetchAlbums() {
        var url = window.location.toString()     
        var index = url.lastIndexOf("users")
        var index2 = url.lastIndexOf("/")
        var id = url.substring(index+6, index2)
        try{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)

            .then(response => response.json())
            .then(json => setData(json))
           
            
        }catch(e){
            //alert(e)
        }
    }

    function fetchUser() {
        var url = window.location.toString()     
        var index = url.lastIndexOf("users")
        var index2 = url.lastIndexOf("/")
        var id = url.substring(index+6, index2)
       
            try{
    
            
            fetch('https://jsonplaceholder.typicode.com/users')
    
                .then(response => response.json())
                .then(json => setUser(json.filter((o) => o["id"] == id)[0]))
                //alert(JSON.stringify(user))
                fetchAlbums()
                
    
            }catch(e){
                //alert(e)
            }
        }


    
    useEffect(() => {
        
        if(localStorage.getItem("name")==null){
            window.location.replace('/');
          }
     
        fetchUser()
        
        
    }, [])

  return (
    <>
     
      <Container className="container">
      <div class="col s12 m7">
    <h5 class="header">Total Albums: {data.length}</h5>
    <div class="card horizontal">
      <div class="card-image">
        <img height={145} src={avatar}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p> Name: {user.name}</p>
          <p> Email: {user.email}</p>
        </div>
        <div class="card-action">
          <a onClick={() => navigate(`/users`)} href="">BACK</a>
        </div>
      </div>
    </div>
  </div>
          <Row className="row">
            {data?.map((item) => (
             <div class="col s4">
                <AlbumCard  album={item}  />
              </div>
            ))}
          </Row>
        
      </Container>
    </>
  );
}
