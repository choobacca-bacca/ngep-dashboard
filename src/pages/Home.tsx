// Home.js 
import React from 'react';
import { ReactSVG } from "react-svg";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from 'react-router-dom'

function Home (){ 
	return (
	<div style={{height:"100vh"}}>
		<h1>Welcome to the home of COMET!</h1> 
		<img src="https://ngep-dashboard-resources.s3.ap-southeast-1.amazonaws.com/comet-meteor.svg" alt="a comet" height={"40%"}/>
		<p> This is the one stop page for everything and anything to do with the Collaborative Machine Enabling Transformation (COMET). </p>
		<p>	To learn more, please click on any of the below links.
		</p>
		<Stack direction="row" spacing={2} style={{margin:"auto", width:"50%"}} alignItems={"center"} justifyContent={"center"}>
			<Link to={"about"} style={{ textDecoration: 'none' }}>
				<Button variant="contained" startIcon={<InfoIcon />}>
					About
				</Button>
			</Link>
			<Link to={"goals"} style={{ textDecoration: 'none' }}>
				<Button variant="contained" startIcon={<SportsScoreIcon />}>
					Goals
				</Button>
			</Link>
			<Link to={"metrics"} style={{ textDecoration: 'none' }}>
				<Button variant="contained" startIcon={<AutoGraphIcon />}>
					Metrics
				</Button>
			</Link>
			  
    	</Stack>
	</div>

	)
	
} 

export default Home;