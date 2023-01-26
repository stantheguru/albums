import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export const PhotoCard = ({ photo }) => {
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
      style={{
        width: "100%",
        background: "#161616",
        color: "white",
        borderRadius: 6,
        position: "relative",
      }}
      className="album-card"
    >
      <Card.Body>
        <LazyLoadImage
          src={photo.url}
          width={"100%"}
          height={350}
          alt="photoimg"
          effect="blur"
          style={{ objectFit: "cover" }}
        />
        <Card.Title
          onClick={() => navigate(`/photo/${photo.id}`)}
          className="center"
          style={{ cursor: "pointer" }}
        >
         {photo.title.split(" ")[0].toUpperCase()}
        </Card.Title>
      </Card.Body>
    </Card>
  </motion.div>
  );
};
