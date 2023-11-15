// AboutNGEP.js 
import React from 'react'; 
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';

function AboutNGEP (){ 
	return (

	<Stack
	direction="column"
	justifyContent="center"
	alignItems="center"
	spacing={2}
	pt={3}
	>
		<Card variant="outlined" sx={{ maxWidth: 600 }}>
		<AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://ngep-dashboard-resources.s3.ap-southeast-1.amazonaws.com/laptop-work.jpg"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="vertical">
			<Typography level="h1">CoMET</Typography>
			
			<Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
				The Collaborative Machine Enabling Transformation
			</Typography>
			
			<Typography textAlign={'left'}>
			CoMET was conceived to modernise our government enterprise infrastructure. It features Secure Service Edge /(SSE/) technology that allows safe and secure access to the internet and modern cloud-based work tools. 
			By adopting a cloud first approach to how we run our applications and store our data, we are able to reduce  the data footprint on the device and reduce bloatware, which makes for a speedy and lightweigh
			device that can meet our public officers' needs.
			</Typography>
		</CardContent>
		</Card>

		<Card variant="outlined" sx={{ maxWidth: 600 }}>
			<AspectRatio minHeight="120px" maxHeight="200px">
				<img
				src="https://ngep-dashboard-resources.s3.ap-southeast-1.amazonaws.com/castle-and-moat.jpg"
				loading="lazy"
				alt=""
				/>
			</AspectRatio>
			<CardContent orientation="vertical">
				<Typography level="h1">The Problem</Typography>
				
				<Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
					Why the need for this?
				</Typography>
				
				<Typography textAlign={'left'}>
				Our traditional castle-and-moat approach was not serving our growing IT needs within the government. With the traditional VPN setup, you would connect
				to our on-premises systems which gave you free reign to all and every system we hosted on-premises. However, with more and more tools moving to the cloud,
				we needed to break holes in our castle wall to open up access to these cloud apps, compromising our security posture. THus, there was a need to re-consider 
				our inside-out architecture. 
				</Typography>
				<Typography></Typography>
				<Typography textAlign={'left'}>
				Beyond that, the way our governement works has expanded beyond just paperwork. Data analysis, graphic design, modelling have all become part and parcel of our 
				 work and there was a need for a setup that could enable us to exploit these tools in a safe and secure manner.
				</Typography>
				<Typography></Typography>
				<Typography textAlign={'left'}>
				And last but not least, our devices have gotten too important. A device with years of data is a significant risk in the event of a loss. There is a need to reduce the 
				importance of each individual device, given that there is more than a 100,000 such devices out there, each representing a potential data breach incident.
				</Typography>
			</CardContent>
		</Card>
  </Stack>)
} 

export default AboutNGEP;
