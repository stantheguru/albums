import React, { useState, useEffect } from "react";
import { Container } from "react-materialize";
import { useNavigate } from "react-router-dom";


export default function PhotoDetails() {
    const navigate = useNavigate();


    const [id, setID] = useState("")
    const [title, setTitle] = useState('');

    const [data, setPhoto] = useState({});

    const handleTitleChange = event => {
        // 👇️ access textarea value
        setTitle(event.target.value);

    };


    useEffect(() => {
        if(localStorage.getItem("name")===null){
            window.location.replace('/');
          }
        var url = window.location.toString()

        var index = url.lastIndexOf("/")
        var photo_id = url.substring(index + 1)
        try {

            fetch('https://jsonplaceholder.typicode.com/photos')

                .then(response => response.json())
                .then(json => setPhoto(json.filter((o) => o["id"].toString() === photo_id)[0]))
            
            


        } catch (e) {
            //alert(e)
        }
    },[])

    function updateTitle() {
        setID(data.id)
        if(title === ""){
            alert("Please enter a title")
        }else{
        try {
            fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: { id },
                    title: { title },

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => json);
                    alert("update was successful")
                    navigate(`/albums/${data.albumId}/photos`)
                
            //updatedPhoto()

        } catch (e) {
            alert(e)
        }
    }
    }




   
        

        var link = "/albums/"+data.albumId+"/photos";


    return (
        <>
            <Container className="container">
                <div class="col s12 m7">
                    <h5 class="header">Photo ID: {data.id}</h5>
                    <div class="card horizontal">
                        <div class="card-image">
                            <img alt="photoimage" height={400} width={400} src={data.url} />
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p><b>Photo Title: {data.title}</b></p>
                                <input
                                    name="message"
                                    value={title}
                                    placeholder="Edit Title"
                                    onChange={handleTitleChange}
                                    class="materialize-textarea" style={inputStyle}/>

                               
                            </div>
                            <div class="card-action">
                                <a onClick={() => navigate(`/albums/${data.albumId}/photos`)} href={link}>BACK</a>
                                <button  class="btn btn primary" onClick={updateTitle} >UPDATE TITLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}


const inputStyle = {
    height: 60
}