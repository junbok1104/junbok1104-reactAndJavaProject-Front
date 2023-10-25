import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";

function EditCar(props) {
    
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        fuel: '',
        price : ''
    });

    //모달 폼 열기
    const handleClickOpen = () => {
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            fuel: props.data.row.fuel,
            price: props.data.row.price
        })
        setOpen(true);
    };
    
    // 모달 폼 닫기
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({...car, [event.target.name]:event.target.value});
    };

    //자동차를 업데이트하고 모달 폼을 닫음
    const handleSave = () => {
        props.updateCar(car, props.data.id);
        handleClose();
    }


    return (
        <div>
            <IconButton onClick={handleClickOpen}>Edit</IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                    <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand" autoFocus variant="standard" value={car.brand} onChange={handleChange}/>
                        <TextField label="Model" name="model" autoFocus variant="standard" value={car.model} onChange={handleChange}/>
                        <TextField label="Color" name="color" autoFocus variant="standard" value={car.color} onChange={handleChange}/>
                        <TextField label="Year"  name="year"  autoFocus variant="standard" value={car.year}  onChange={handleChange}/>
                        <TextField label="Price" name="price" autoFocus variant="standard" value={car.price} onChange={handleChange}/>
                    </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;