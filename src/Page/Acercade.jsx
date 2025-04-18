import { Container, Card, CardContent, Typography } from "@mui/material";
import "./Acercade.css";

const Acercade = () => {
  return (
    <Container className="acercade-container" maxWidth="md">
      <Card className="acercade-card" elevation={6}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Acerca de la Aplicación
          </Typography>
          <Typography variant="body1" paragraph>
            Esta aplicación fue desarrollada con React y consume datos desde la
            API pública de Dragon Ball.
          </Typography>
          <Typography variant="body1" paragraph>
            Puedes explorar personajes, filtrarlos por género, ver detalles
            individuales y disfrutar de una experiencia responsiva tanto en
            escritorio como en móvil.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Proyecto hecho con ❤️ por Daniel.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Acercade;
