import { Card as MuiCard, CardContent, Link, Typography } from '@mui/material';
import { CardProps } from './Card.types';
import { PokemonDetails } from './components/PokemonDetails';
import { getAbilitiesFromData } from './functions/getAbilitiesFromData';
import { getFormsFromData } from './functions/getFormsFromData';
import { getStatsFromData } from './functions/getStatsFromData';
import { useCardState } from './hooks/useCardState';

export const Card = ({ name, url }: CardProps) => {
  const { setOpen, open, abilities, forms, stats } = useCardState(url);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MuiCard
        sx={{ cursor: 'pointer' }}
        component="button"
        onClick={() => setOpen(true)}
      >
        <CardContent>
          <Typography textTransform="capitalize">{name}</Typography>
          <Link target="_blank" href={url}>
            {url}
          </Link>
        </CardContent>
      </MuiCard>
      <PokemonDetails
        isOpen={open}
        onClose={handleClose}
        pokemonName={name}
        abilities={getAbilitiesFromData(abilities)}
        forms={getFormsFromData(forms)}
        stats={getStatsFromData(stats)}
      />
    </>
  );
};
