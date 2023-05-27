import React from 'react'
import Layout from './../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, TableCell, Table, TableContainer, TableHead, TableRow, Typography, TableBody } from '@mui/material'
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4":{
        fontWeight: "bold", mb: 2 
      }, }}>
        <Typography variant="h4">
          Contact My Resturent
        </Typography>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Aperiam, quos delectus eaque
         impedit totam ipsa enim nihil? 
        Pariatur tempora vero non fugiat
         laboriosam culpa doloremque rerum iure possimus,
          saepe mollitia!
        </p>
      </Box>
      <Box sx={{ m: 3,width:"600px", ml: 5, "@media(max-width:600px)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>

              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white",}} align="center">
                  Contact Details
                </TableCell>
              </TableRow>

            </TableHead>
<TableBody>
  <TableRow>
    <TableCell>
<SupportAgentIcon sx={{color:'red',pt: 1}} />1990-00-0000 (TollFree :)
    </TableCell>
  </TableRow>
  <TableRow>
 
    <TableCell>
<MailIcon sx={{color:'skyblue',pt: 1}} /> mtrisha580@gmail.com
    </TableCell>
  </TableRow>
  <TableRow>
 
 <TableCell>
<CallIcon sx={{color:'green',pt: 1}} /> 1234780987
 </TableCell>
</TableRow>
</TableBody>
           
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
