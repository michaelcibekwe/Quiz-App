import React from 'react';
import { AppBar, 
    Box, 
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

const columns = [
    { id: 'name', label: 'Quiz Name', minWidth: 170 },
    { id: 'score', label: 'Score', minWidth: 100 },
];

function createData(name, score) {
    return { name, score}
}



function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Toolbar />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6" component="h2">
                My Quizzes
              </Typography>
              <Typography variant="body2" component="p">
                Some content for Card 1.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6" component="h2">
                Quiz Scores
              </Typography>
              <Typography variant="body2" component="p">
                Some content for Card 2.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
