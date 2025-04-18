import React, { useEffect, useState, useRef, useCallback } from "react";
import CharacterCard from "../Componets/Card/CharacterCard";
import "./HomePage.css";
import { Grid, CircularProgress, Typography } from "@mui/material";

const HomePage = ({ genderFilter }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef();

  // 🚀 Cargar personajes usando fetch
  const fetchCharacters = async (pageToFetch = 1, reset = false) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters?page=${pageToFetch}`
      );
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      const newChars = data.items;

      setCharacters((prev) => (reset ? newChars : [...prev, ...newChars]));
      setHasMore(newChars.length > 0);
    } catch (error) {
      console.error("Error al cargar personajes:", error);
      setError("No se pudieron cargar los personajes.");
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Resetear cuando cambia el filtro
  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setHasMore(true);
    fetchCharacters(1, true);
  }, [genderFilter]);

  // 📥 Cargar más personajes al hacer scroll
  useEffect(() => {
    if (!loading && hasMore && page !== 1) {
      fetchCharacters(page);
    }
  }, [page]);

  // 🔍 Scroll infinito
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // 🎯 Filtro
  const filteredCharacters = characters.filter((char) => {
    if (genderFilter === "All") return true;
    return char.gender === genderFilter;
  });

  return (
    <div className="homepage-container">
      {error && (
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      )}
      <Grid container spacing={2} justifyContent="center">
        {filteredCharacters.map((char, index) => {
          const card = (
            <CharacterCard
              id={char.id}
              name={char.name}
              image={char.image}
              race={char.race}
            />
          );
          return (
            <Grid
              item
              key={char.id}
              ref={
                index === filteredCharacters.length - 1 ? lastElementRef : null
              }
            >
              {card}
            </Grid>
          );
        })}
      </Grid>
      {loading && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default HomePage;
