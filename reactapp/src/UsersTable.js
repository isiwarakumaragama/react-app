import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer 
            component={Paper} 
            sx={{
                maxWidth: '900px',
                margin: 'auto',
                backgroundColor: 'rgba(245, 245, 245, 0.6)', // Adjusted for transparency
                borderRadius: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '& .MuiTableCell-head': {
                    backgroundColor: 'rgba(245, 245, 245, 0.6)', // Slightly transparent header
                    fontWeight: '600',
                    fontSize: '16px',
                    color: '#000000',
                    borderBottom: '2px solid #E0E0E0'
                },
                '& .MuiTableCell-body': {
                    fontSize: '14px',
                    color: '#333333',
                    borderBottom: '1px solid #E0E0E0'
                }
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow 
                                key={row.id} 
                                sx={{ 
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': { backgroundColor: 'rgba(238, 238, 238, 0.7)' } // Transparent hover effect
                                }}
                            >
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            backgroundColor: '#4355BE',
                                            color: 'white',
                                            padding: '6px 20px',
                                            borderRadius: '8px',
                                            textTransform: 'uppercase',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            '&:hover': {
                                                backgroundColor: '#3644A0',
                                            }
                                        }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name })}
                                    >
                                        UPDATE
                                    </Button>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            backgroundColor: '#4355BE',
                                            color: 'white',
                                            padding: '6px 20px',
                                            borderRadius: '8px',
                                            textTransform: 'uppercase',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            '&:hover': {
                                                backgroundColor: '#3644A0',
                                            }
                                        }}
                                        onClick={() => deleteUser({ id: row.id })}
                                    >
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell colSpan={3} align="center">No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
