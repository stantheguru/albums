import 'materialize-css/dist/css/materialize.min.css';
import background from '../assets/background.jpg'
import FacebookLogin from 'react-facebook-login';
import React from 'react';



function Home() {

  

    const responseFacebook = (response) => {

        if (response.accessToken) {
          
            localStorage.removeItem("picture")
            localStorage.removeItem("name")
            localStorage.setItem("picture", response.picture.data.url)
            localStorage.setItem("name", response.name)

            //alert(localStorage.getItem("name"))

            window.location.replace('/albums');

        } else {
            
        }
    }




    return (
        <div className="Home" >

            <div id="index-banner" class="parallax-container" style={myStyle}>

                <div class="section no-pad-bot">
                    <div class="container">

                        <h1 class="header center white-text text-lighten-2">Welcome to Nostalgia</h1>
                        <div class="row center">
                            <h5 class="header col s12 white-text">Nostalgia is a a Photo Album website. Enjoy!</h5>
                        </div>

                        <div style={divButton} class="row center">
                            {localStorage.getItem("name") == null ?
                                <FacebookLogin
                                    style={buttonStyle}
                                    appId="423586466503883"
                                    fields="name,email,picture"
                                    scope="public_profile,user_friends"
                                    callback={responseFacebook}
                                    icon="fa-facebook" />
                                : <a href="/albums" class="waves-effect waves-light btn-large"><i class="material-icons left">folder</i>Explore Albums</a>
                            }

                        </div>
                    </div>

                </div>

            </div>
         

        </div>
    );
}
const myStyle = {
    backgroundImage: `url(${background})`,

    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};



const divButton = {

}

const buttonStyle = {


    borderRadius: 20,
    fontWeight: 'bold',
    height: 50
};

export default Home;
