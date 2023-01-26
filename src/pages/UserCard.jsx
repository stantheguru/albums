import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from '../assets/avatar.png'



export const UserCard = ({ user }) => {
  var link = "/users/"+user.id+"/albums";
  const navigate = useNavigate();
  return (
  <motion.div
  initial={{ scale: 0,opacity:0 }}
  animate={{ opacity:1, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 40,
  }}
  
  >
      <Card
      className="center"
      style={{
        width: "100%",
        background: "#fff",
        color: "white",
        borderRadius: 6,
        position: "relative",
        display: 'flex',
        justifyContent:'center',
        padding:10
       
      
       
      }}
     
    >
          <div style={{
       
       color: "white",
       borderRadius: 6,
       position: "relative",
       display: 'flex',
       justifyContent:'flexstart',
       alignItems:'flex-start',
       width:'80%',
    
      
     
      
     }}>
        <LazyLoadImage
          src={avatar}
          width={30}
          height={30}
          borderWidth={2}
          alt="user"
          
          
        />
       &nbsp;&nbsp;
         <Card.Title
        
          className="center"
          style={{ cursor: "pointer" , color:'black', fontSize:18 }}
        >
         {user.name}, 
        </Card.Title>

        <Card.Title
       
          
          className="center"
          style={{ cursor: "pointer" , color:'black',fontSize:18 }}
        >
         {user.email}
        </Card.Title>

       
        </div>
        &nbsp;&nbsp;
        <div style={{
       
        color: "white",
        borderRadius: 6,
        position: "relative",
        display: 'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:'20%'
       
      
       
      }}>
        <a href={link} onClick={() => navigate(`/users/${user.id}/albums`)} class="waves-effect waves-light right btn-small"><i class="material-icons left">visibility</i>View User</a>

        </div>
      <Card.Body>
      
      </Card.Body>
    </Card>
  </motion.div>
  );
};
