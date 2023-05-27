import React from 'react'
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:15,
        p: 2,
        textAlign: "center",
        "& h4":{
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p":{
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4":{
            fontSize:"1.5rem",
          },
        },
      }}
      
      > 
<Typography variant="h4">
  Welcome To My Resturent
</Typography>
<p>Lorem ipsum dolor sit amet,
   consectetur adipisicing elit. 
   Error porro tenetur maxime, 
   laborum nam dignissimos deleniti ipsam recusandae
    numquam possimus et eligendi aliquam ipsum saepe, eos, 
    ad similique atque quasi eius distinctio vitae modi obcaecati. 
    Obcaecati illo repudiandae cupiditate quis doloremque corrupti 
    mollitia dolore asperiores architecto. Autem earum recusandae,
     commodi excepturi aperiam, doloribus accusantium ratione est 
     tenetur alias dolorum, atque enim dolores! Quos nisi voluptates 
     cumque itaque rem officiis nobis! Hic maiores,
       consequuntur expedita dignissimos odio magni quis.
       </p>
       <br />
       <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Vero libero earum culpa quia consequuntur tenetur distinctio,
amet excepturi iure id vel perferendis odio eius tempore dolorum nesciunt a, 
ex dolores deleniti quos ullam praesentium eum minima 
doloremque! Eaque quia possimus debitis veritatis voluptates. 
Atque hic illum accusantium neque repellat dicta beatae ut sapiente molestiae magni! 
Harum esse deserunt laborum.
 Excepturi porro, asperiores quam doloribus blanditiis,
  hic aliquam non beatae necessitatibus unde nihil natus 
  reprehenderit voluptatem molestias aut
   fugiat quo accusantium exercitationem quis?
   Voluptatem voluptatibus, 
tempore provident nobis laboriosam rem necessitatibus,
 dolore nam sit,
  natus ullam modi maiores officiis itaque atque!

       </p>
      </Box>


    </Layout>
  )
}

export default About;
