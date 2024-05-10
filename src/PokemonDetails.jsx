import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export default function PokemonDetails({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const pokemonDetails = useSelector((state) => state.pokemon.pokemonDetails);

  console.log("Single Pokemon", pokemonDetails);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  // const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
      style={{minWidth: '280px'}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontSize:20, fontWeight:700}} id="customized-dialog-title ">
          {pokemonDetails.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {/* type: {pokemonDetails.types.map((pokemonType)=>(
              <span>{pokemonType.type.name}</span>
            ))} */}
            {`Type: ${pokemonDetails?.types?.map(
              (pokemonType) => pokemonType.type.name
            )} `}
          </Typography>
          <Typography gutterBottom>
            {`Weight: ${pokemonDetails.weight}`}
          </Typography>
          <Typography gutterBottom>
            {`Height: ${pokemonDetails.height}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>

//     </React.Fragment>
//   );
// }
