import {
  Card as MuiCard,
  CardContent,
  Link,
  Typography,
  Box,
  Modal,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../../requests';
import { GetPokemonDetailsResponse } from '../../types';
import { CardProps, ColorOptions } from './Card.types';

const colorOptions: ColorOptions[] = [
  'coral',
  'burlywood',
  'cyan',
  'darkgray',
  'cornsilk',
  'darkseagreen',
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'primary.main',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export const Card = ({ name, url }: CardProps) => {
  const [color, setColor] = useState<ColorOptions>(colorOptions[0]);
  const [open, setOpen] = useState<boolean>(false);
  const [abilities, setAbilities] = useState<
    GetPokemonDetailsResponse['abilities']
  >([]);
  const [forms, setForms] = useState<GetPokemonDetailsResponse['forms']>([]);
  const [stats, setStats] = useState<GetPokemonDetailsResponse['stats']>([]);

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
        setStats(response.data.stats);
      });
    }
  }, [open]);

  return (
    <MuiCard
      sx={{
        backgroundColor: color,
        cursor: 'pointer',
      }}
      component="button"
      onClick={() => setOpen(true)}
    >
      <CardContent>
        <Typography textTransform="capitalize">{name}</Typography>
        <Link target="_blank" href={url}>
          {url}
        </Link>
      </CardContent>
      <Modal
        sx={style}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', outline: 0 }}>
          <Button
            sx={{ marginLeft: 'auto', bgcolor: 'primary.light' }}
            onClick={e => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            X
          </Button>
          <Typography
            textTransform="capitalize"
            fontSize={theme => theme.typography.h4.fontSize}
            color="primary.contrastText"
          >
            {name}
          </Typography>
          <Box sx={{ pt: theme => theme.spacing(2) }}>
            <Typography color="primary.contrastText">Abilities</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              {abilities.map(ability => (
                <MuiCard
                  sx={{
                    width: 'fit-content',
                    padding: 1,
                  }}
                  key={ability.ability.name}
                >
                  <Typography>{ability.ability.name}</Typography>
                </MuiCard>
              ))}
            </Box>
          </Box>
          <Box sx={{ pt: theme => theme.spacing(2) }}>
            <Typography component="h4" color="primary.contrastText">
              Forms
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: 1,
              }}
            >
              {forms.map(form => (
                <MuiCard
                  sx={{
                    width: 'fit-content',
                    padding: 1,
                  }}
                  key={form.name}
                >
                  <Typography>{form.name}</Typography>
                </MuiCard>
              ))}
            </Box>
          </Box>
          <Box sx={{ pt: theme => theme.spacing(2) }}>
            <Typography component="h4" color="primary.contrastText">
              Stats
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {stats.map(stat => (
                <MuiCard
                  sx={{
                    minWidth: theme => theme.spacing(15),
                    padding: 1,
                  }}
                  key={stat.stat.name}
                >
                  <Typography textTransform="capitalize">
                    {stat.stat.name}
                  </Typography>
                  <Typography>Base stat: {stat.base_stat}</Typography>
                  <Typography>Effort: {stat.effort}</Typography>
                </MuiCard>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </MuiCard>
  );
};
