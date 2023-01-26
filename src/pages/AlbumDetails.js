import React, {  useState } from "react";
import { Container, Row } from "react-materialize";
import { PhotoCard } from "./PhotoCard";
import cover from '../assets/cover.jpg'
import { useNavigate } from "react-router-dom";


export default function AlbumDetails() {
    const navigate = useNavigate();
  
    


    const [data, setData] = useState([]);
 
    const [album_data, setAlbum] = useState({});
    

    function fetchAlbum() {
        var url = window.location.toString()
        
        var index = url.lastIndexOf("albums")
        var index2 = url.lastIndexOf("/")
        var album_id = url.substring(index+7, index2)
            try{
    
                fetch('https://jsonplaceholder.typicode.com/albums')

            .then(response => response.json())
            .then(json => setAlbum(json.filter((o) => o["id"] === album_id)[0]))
              
               //setTitle(json.title)
             
               //alert(title)
               fetchPhotos()
            }catch(e){
                //alert(e)
            }
    }
    
function fetchPhotos() {
    var url = window.location.toString()
    
    var index = url.lastIndexOf("albums")
        var index2 = url.lastIndexOf("/")
        var album_id = url.substring(index+7, index2)
        
        try{ 
        fetch(`https://jsonplaceholder.typicode.com/albums/${album_id}/photos`)

            .then(response => response.json())
            .then(json => setData(json))
            //alert(album_data)
            
           
        }catch(e){
            //alert(e)
        }
    }



      if(localStorage.getItem("name")==null){
        window.location.replace('/');
      }
        fetchAlbum()
        
        

  return (
    <>
    
    
      <Container className="container">
      <div class="col s12 m7">
    <h5 class="header">Album ID: {album_data.id}</h5>
    <div class="card horizontal">
      <div class="card-image">
        <img alt="album" height={145} src={cover}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Album Title: {album_data.title}</p>
        </div>
        <div class="card-action">
          <a onClick={() => navigate(`/albums`)} href="#" >BACK</a>
        </div>
      </div>
    </div>
  </div>
          <Row className="row">
            {data?.map((item) => (
             <div class="col s4">
                <PhotoCard key={item.id} photo={item}  />
              </div>
            ))}
          </Row>
        
      </Container>
    </>
  );
}

