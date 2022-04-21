import Dialog from '@mui/material/Dialog';

const EndBuy = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default EndBuy