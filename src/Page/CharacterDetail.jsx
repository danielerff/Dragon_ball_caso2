import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error cargando detalle:", error);
        setError("No se pudo cargar el personaje.");
      }
    };

    fetchDetail();
  }, [id]);

  if (error)
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );

  if (!character)
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box className="character-detail-container">
      <Card className="character-detail-card">
        <div className="character-detail-content">
          <img
            src={character.image}
            alt={character.name}
            className="character-detail-image"
          />
          <CardContent className="character-info">
            <Typography variant="h4" gutterBottom>
              {character.name}
            </Typography>
            <Typography variant="body1">Raza: {character.race}</Typography>
            <Typography variant="body1">Género: {character.gender}</Typography>
            <Typography variant="body1">ki: {character.ki}</Typography>
            <Typography variant="body1">
              Descripción: {character.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

export default CharacterDetail;
