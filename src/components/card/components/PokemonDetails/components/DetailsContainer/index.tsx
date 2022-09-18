import { Box, Card, Typography } from '@mui/material';
import { IDetailsContainerProps } from './types';

export const DetailsContainer = ({ title, list }: IDetailsContainerProps) => {
  return (
    <Box sx={{ pt: theme => theme.spacing(2) }}>
      <Typography textTransform="capitalize" color="primary.contrastText">
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        {list.map(element => (
          <Card
            sx={{
              width: 'fit-content',
              padding: 1,
            }}
            key={element}
          >
            <Typography textTransform="capitalize">{element}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
