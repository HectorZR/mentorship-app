import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export const styles: Record<string, SxProps<Theme>> = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    bgcolor: 'primary.main',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  },
};
