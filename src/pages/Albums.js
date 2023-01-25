import React, {  useState, useEffect, useRef } from "react";
import { Container, Row } from "react-materialize";
import { AlbumCard } from "./AlbumCard";



export default function Albums() {


    const [data, setData] = useState([]);
    const [width, setWidth] = useState(1242)
    const [column, setCol] = useState("col s4")
    

    function fetchAlbums() {
        try{
        fetch('https://jsonplaceholder.typicode.com/albums')

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
       
        setWidth(window.innerWidth)
      
       
        //checkLocation()
        fetchAlbums()
        
        
    }, [width])

  return (
    <>
     
      <Container className="container">
          <Row className="row">
            {data?.map((item) => (
             <div class="col s4">
                <AlbumCard key={item.id} album={item}  />
              </div>
            ))}
          </Row>
        
      </Container>
    </>
  );
}
