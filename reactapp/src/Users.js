import { Box } from "@mui/material";
import UserForm from "./UserForm"
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Isiwara',
    },
    {
        id: 2,
        name: 'Manuja',
    }
];

const Users = ()=>{
    return (
        <Box
            sx={{
                width: 'calc(100%-100px)',
                margin: '20px',
                marginTop: '100px',
            }}
        >
            <UserForm/>
            <UsersTable rows={users}/> 
        </Box>
        
    );
}

export default Users