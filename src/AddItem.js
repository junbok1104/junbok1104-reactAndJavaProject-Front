import { Button } from "@mui/base";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";

function AddItem(props) { 

    const [open, setOpen] = useState(false);

    const [item, setItem] = useState({
        product: '',
        amount: ''
    });

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setItem({...item, [e.target.name]:e.target.value})
    }

    // props를 통해 addItem 함수를 호출하고 항목 상태를 전달
    const addItem = () => {
        props.addItem(item);
        setItem({product:'',amount:''}); // 텍스트 필드를 비움
        handleClose(); 
    }

    return(
        <div>
            <Button onClick={handleOpen} >
                Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Item</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin="dense" onChange={handleChange} 
                    name="product" label="Product" fullWidth></TextField>
                    <TextField value={item.amount} margin="dense" onChange={handleChange} 
                    name="amount" label="Amount" fullWidth></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addItem}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddItem;