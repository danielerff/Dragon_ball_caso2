import React, { useState } from "react";
import "./Header.css";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";

const Header = ({ setGenderFilter }) => {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const handleFilterChange = (gender) => {
    setGenderFilter(gender);
    navigate("/");
  };

  return (
    <header className="header-container">
      <img
        src="https://i.pinimg.com/736x/67/00/9b/67009bbd292643801b87f78caa7d1f82.jpg"
        alt="Dragon Ball Logo"
        className="header-logo"
      />

      <Box sx={{ width: "100%", backgroundColor: "transparent" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 0) handleFilterChange("All");
            if (newValue === 1) handleFilterChange("Female");
            if (newValue === 2) handleFilterChange("Male");
          }}
        >
          <BottomNavigationAction
            label="Todos"
            icon={<Diversity3RoundedIcon />}
          />
          <BottomNavigationAction label="Mujeres" icon={<FavoriteIcon />} />
          <BottomNavigationAction
            label="Hombres"
            icon={<ChildCareRoundedIcon />}
          />
        </BottomNavigation>
      </Box>
    </header>
  );
};

export default Header;
