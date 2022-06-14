import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
interface ModalCustomType {
    handleOpen: () => void
    handleClose: () => void
    open: boolean
    children?: any
    buttonOpen: any
}
export const ModalCustom: React.FC<ModalCustomType> = (props: ModalCustomType) => {
  const { handleOpen, handleClose, open, children, buttonOpen } = props
  return (
    <div>
      {buttonOpen}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {children}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}