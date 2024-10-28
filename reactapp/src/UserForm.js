import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name)
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#B8C5F2',
                padding: '25px',
                borderRadius: '20px',
                maxWidth: '400px',
                margin: '20px auto',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
        >
            <Grid item xs={12}>
                <Typography 
                    component={'h1'} 
                    sx={{
                        color: '#000000',
                        fontSize: '24px',
                        fontWeight: '500',
                        marginBottom: '20px',
                        textAlign: 'left',
                        paddingLeft: '10px'
                    }}
                >
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '15px' }}>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    placeholder="ID"
                    sx={{
                        width: '100%',
                        backgroundColor: '#E8E8E8',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        '&:before': { display: 'none' },
                        '&:after': { display: 'none' },
                        '&:hover': {
                            backgroundColor: '#DADADA'
                        }
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    sx={{
                        width: '100%',
                        backgroundColor: '#E8E8E8',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        '&:before': { display: 'none' },
                        '&:after': { display: 'none' },
                        '&:hover': {
                            backgroundColor: '#DADADA'
                        }
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'left', paddingLeft: '10px' }}>
                <Button
                    sx={{
                        backgroundColor: '#4355BE',
                        color: '#FFFFFF',
                        padding: '8px 30px',
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        '&:hover': {
                            backgroundColor: '#3644A0',
                        }
                    }}
                    onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
                >
                    {isEdit ? 'Update' : 'ADD'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default UserForm;