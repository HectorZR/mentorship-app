import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getResults } from '../../requests';
import { ResponseShape } from '../../types';
import { Card } from '../card';
import './App.css';

export function App() {
  const [pokemons, setPokemons] = useState<ResponseShape[]>([]);

  useEffect(() => {
    getResults().then(res =>
      setPokemons([
        ...res.data.results,
        ...res.data.results,
        ...res.data.results,
        ...res.data.results,
        ...res.data.results,
        ...res.data.results,
      ])
    );
  }, []);

  return (
    <Grid container spacing={6}>
      {pokemons.map(({ name, url }, index) => (
        <Grid item xs={3} key={name + index}>
          <Card name={name} url={url} />
        </Grid>
      ))}
    </Grid>
  );
}
