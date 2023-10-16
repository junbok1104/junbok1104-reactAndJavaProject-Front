import { AppBar, Container, List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import AddItem from './AddItem';

function MuiUse() {

    const[items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([item, ...items]);
    }

    return(
        <Container>
        <AppBar position='static'>
           <Toolbar>
             <Typography variant='h6'>
               Shopping List
             </Typography>
           </Toolbar>
         </AppBar>
         <Stack alignItems="center">
         <AddItem addItem={addItem} ></AddItem>
            <List>
                {
                    items.map((item, index) => 
                        <ListItem key={index} divider>
                            <ListItemText primary={item.product} secondary={item.amount}></ListItemText>
                        </ListItem>
                    )
                }
            </List>
         </Stack>
        </Container>
    )
}

export default MuiUse;
