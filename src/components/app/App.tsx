import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getResults } from '../../requests';
import { ResponseShape } from '../../types';
import { Card } from '../card';
import './App.css';

export function App() {
  const [pokemons, setPokemons] = useState<ResponseShape[]>([]);

  useEffect(() => {
    getResults().then(res => setPokemons(res.data.results));
  }, []);

  return (
    <Grid container spacing={6}>
      {pokemons.map(({ name, url }) => (
        <Grid item xs={2} key={name}>
          <Card name={name} url={url} />
        </Grid>
      ))}
    </Grid>
  );
}
