import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DetailsContainer } from './components/DetailsContainer';
import { StatsDetails } from './components/StatsDetails';
import { styles } from './styles';
import { IPokemonDetailsProps } from './types';

export const PokemonDetails = ({
  pokemonName,
  abilities,
  forms,
  stats,
  isOpen,
  onClose,
}: IPokemonDetailsProps) => (
  <Modal sx={styles.modal} open={isOpen} onClose={onClose}>
    <Box sx={{ display: 'flex', flexDirection: 'column', outline: 0 }}>
      <Button
        sx={{ marginLeft: 'auto', bgcolor: 'primary.light' }}
        onClick={onClose}
      >
        X
      </Button>
      <Typography
        textTransform="capitalize"
        fontSize={theme => theme.typography.h4.fontSize}
        color="primary.contrastText"
      >
        {pokemonName}
      </Typography>
      <DetailsContainer title="Abilities" list={abilities} />
      <DetailsContainer title="Forms" list={forms} />
      <StatsDetails stats={stats} />
    </Box>
  </Modal>
);
