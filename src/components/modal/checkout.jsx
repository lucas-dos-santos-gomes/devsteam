import Image from 'next/image';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './checkout.module.css';

export default function Checkout({ price, open, closeModal }) {
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Image className={styles.image} src="/confirm.png" alt="Ícone de confirmação" width={120} height={120} />
      <DialogTitle id="alert-dialog-title">
        {"Pronto!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Sua compra no valor de R${price} foi efetuada com sucesso!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} autoFocus>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}