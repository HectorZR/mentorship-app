import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export const styles: Record<string, SxProps<Theme>> = {
  statsContainer: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
  },
  statContainer: {
    width: theme => theme.spacing(13),
    padding: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
