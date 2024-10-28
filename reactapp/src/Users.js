import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import backgroundVideo from './background.mp4'; // Ensure the video file is in the src folder

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const addUser = (data) => {
        setSubmitted(true);
        const payload = { id: data.id, name: data.name };
        
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = { id: data.id, name: data.name };

        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
                setSelectedUser({});
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const deleteUser = (data) => {
        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    width: '100%',
                    padding: '40px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    minHeight: '100vh',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <UserForm
                    addUser={addUser}
                    updateUser={updateUser}
                    submitted={submitted}
                    data={selectedUser}
                    isEdit={isEdit}
                />
                <UsersTable
                    rows={users}
                    selectedUser={data => {
                        setSelectedUser(data);
                        setIsEdit(true);
                    }}
                    deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
                />
            </Box>
        </Box>
    );
};

export default Users;
