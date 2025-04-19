import React from "react";
import "./CharacterCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ id, name, image, race }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/personaje/${id}`);
  };

  return (
    <Card
      className="character-card"
      onClick={handleClick}
      style={{ overflow: "visible" }}
    >
      <CardActionArea>
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {race || "Raza desconocida"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
