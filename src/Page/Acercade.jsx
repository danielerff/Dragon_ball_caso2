import { Container, Card, CardContent, Typography } from "@mui/material";
import "./Acercade.css";

const Acercade = () => {
  return (
    <Container className="acercade-container" maxWidth="md">
      <Card className="acercade-card" elevation={6}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Daniel Fernando Sanchez Chaux
          </Typography>
          <Typography variant="body1" paragraph>
            estudiante de ingenieria de sistema de la universidad de la amazonia
            .Cursando la materia de programacion web .
          </Typography>
          <Typography variant="body1" paragraph>
            En esta aplicacion puedes explorar personajes, filtrarlos por
            género, ver detalles individuales y disfrutar.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Acercade;
