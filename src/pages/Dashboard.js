import React from 'react';
import { AppBar, 
    Box,
    Button, 
    Toolbar, 
    Typography, 
    Container, 
    Grid, 
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
     } from '@mui/material';
import Navbar from '../components/navbar/Navbar';


const columns = [
    { id: 'name', label: 'Quiz Name', minWidth: 200 },
    { id: 'score', label: 'Score', minWidth: 25 },
];

function createData(name, score) {
    return { name, score}
}

const rows = [
    createData('Intro to Science', 100),
    createData('Chemistry', 90),
    createData('World History', 98),
    createData('United States History', 70),
    createData('Biology', 49),
    createData('European History', 73),
    createData('Biology', 45),
    createData('Statistics', 0),
    createData('Operating Systems', 87),
    createData('Philosophy', 50),
    createData('Politics', 23),
    createData('Trigonometry', 99),
    createData('European Culture', 2),
    createData('Application Development', 94),
    createData('Operating Systems', 5),
  ];

  export default function Dashboard() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
       <Navbar />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6" component="h2">
                My Quizzes
              </Typography>
              <Typography variant="body2" component="p">
                Dummy Data
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6" component="h2">
                Quiz Scores
              </Typography>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
