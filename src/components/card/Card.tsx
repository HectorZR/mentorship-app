/* eslint-disable max-lines-per-function */
/* eslint-disable  max-lines */
/** @jsxImportSource @emotion/react */
import {
  css,
  Card as MuiCard,
  CardContent,
  Link,
  Typography,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../../requests';
import { GetPokemonDetailsResponse } from '../../types';
import { ModalDetails } from '../modalDetails';
import { CardProps, ColorOptions } from './Card.types';

const colorOptions: ColorOptions[] = [
  'coral',
  'burlywood',
  'cyan',
  'darkgray',
  'cornsilk',
  'darkseagreen',
];

export const Card = ({ name, url }: CardProps) => {
  const [color, setColor] = useState<ColorOptions>(colorOptions[0]);
  const [open, setOpen] = useState<boolean>(false);
  const [abilities, setAbilities] = useState<
    GetPokemonDetailsResponse['abilities']
  >([]);
  const [forms, setForms] = useState<GetPokemonDetailsResponse['forms']>([]);

  const handleColorClick = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  const getPokemonId = (url: string) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  useEffect(() => {
    if (open) {
      getPokemonDetails(getPokemonId(url)).then(response => {
        setAbilities(response.data.abilities);
        setForms(response.data.forms);
      });
    }
  }, [open]);

  return (
    <MuiCard
      css={css`
        background-color: ${color};
        cursor: pointer;
      `}
      onClick={() => setOpen(true)}
    >
      <CardContent>
        <Typography>{name}</Typography>
        <Link target="_blank" href={url}>
          {url}
        </Link>
      </CardContent>
      <ModalDetails open={open} handleClose={() => setOpen(false)}>
        <Typography>{name}</Typography>
        <Box sx={{ pt: theme => theme.spacing(2) }}>
          <Typography>Abilities</Typography>
          {abilities.map(ability => (
            <Typography key={ability.ability.name}>
              {ability.ability.name}
            </Typography>
          ))}
        </Box>
        <Box sx={{ pt: theme => theme.spacing(2) }}>
          <Typography>Forms</Typography>
          {forms.map(form => (
            <Typography key={form.name}>{form.name}</Typography>
          ))}
        </Box>
      </ModalDetails>
    </MuiCard>
  );
};
