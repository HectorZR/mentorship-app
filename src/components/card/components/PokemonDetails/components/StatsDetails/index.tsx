import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from './styles';
import { IStatsDetailsProps } from './types';

export const StatsDetails = ({ stats }: IStatsDetailsProps) => (
  <Box sx={{ pt: theme => theme.spacing(2) }}>
    <Typography textTransform="capitalize" color="primary.contrastText">
      Stats
    </Typography>
    <Box sx={styles.statsContainer}>
      {stats.map(stat => (
        <Card sx={styles.statContainer} key={stat.name}>
          <Typography textTransform="capitalize">{stat.name}:</Typography>
          <Typography>{stat.value}</Typography>
        </Card>
      ))}
    </Box>
  </Box>
);
