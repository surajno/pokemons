import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails, getPokemons } from "./store/slice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import PokemonDetails from "./PokemonDetails";

function App() {
  // https://pokeapi.co/api/v2/pokemon
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const [open, setOpen] = useState(false);

  const handleClick = async (url) => {
    dispatch(getPokemonDetails(url));
    setOpen(true);
  };

  console.log("Pokemons DATA", pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 2fr 2fr",
        gap: "1px",
       padding:"10px",
       margin:"10px"
      }}
    >
      {pokemons.map((pokemon, index) => (
        <Card
          sx={{ minWidth: 275,border:"1px solid black", marginLeft:"80px", marginBottom:"5px", display: "grid",textAlign:"center",alignItems: "center", justifyContent:"center"}}
          key={`pokemon_${index}`}
          onClick={() => handleClick(pokemon.url)}
          style={{cursor:'pointer'}}
        >
          <CardContent>
            <Typography
              sx={{display: "flex", fontSize:20, fontWeight:600 ,textAlign:"center",alignItems: "center", justifyContent:"center"}}
              color="text.secondary"
              gutterBottom
            >
              {pokemon.name}
            </Typography>
          </CardContent>
          {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      ))}
 
      <PokemonDetails open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
