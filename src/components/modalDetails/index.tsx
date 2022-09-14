/** @jsxImportSource @emotion/react */
import { Box, Button, Modal } from '@mui/material';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalDetailsProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const ModalDetails = ({
  open,
  handleClose,
  children,
}: ModalDetailsProps) => {
  return (
    <Modal
      sx={style}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          sx={{ marginLeft: 'auto', bgcolor: 'ButtonHighlight' }}
          onClick={handleClose}
        >
          X
        </Button>
        {children}
      </Box>
    </Modal>
  );
};
