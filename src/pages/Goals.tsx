// AboutNGEP.js 
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Stack from '@mui/joy/Stack';

function createData(
	Goal_metric: string,
	Goal: string,
	Goal_Description: string,
	Goal_reasoning: string
  ) {
	return {
		Goal_metric,
		Goal,
		Goal_Description,
		Goal_reasoning
	};
  }
  
  function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
  
	return (
	  <React.Fragment>
		<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
		  <TableCell>
			<IconButton
			  aria-label="expand row"
			  size="small"
			  onClick={() => setOpen(!open)}
			>
			  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
			</IconButton>
		  </TableCell>
		  <TableCell component="th" scope="row">
			{row.Goal_metric}
		  </TableCell>
		  <TableCell align="left">{row.Goal}</TableCell>
		  <TableCell align="left">{row.Goal_Description}</TableCell>
		</TableRow>
		<TableRow>
		  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
			<Collapse in={open} timeout="auto" unmountOnExit>
			  <Box sx={{ margin: 1 }}>
				<Typography variant="h6" gutterBottom component="div">
				  Goal Description
				</Typography>
				<Table size="small" aria-label="purchases">
				  <TableHead>
					<TableRow>
					  <TableCell>{row.Goal_reasoning}</TableCell>
					</TableRow>
				  </TableHead>
				</Table>
			  </Box>
			</Collapse>
		  </TableCell>
		</TableRow>
	  </React.Fragment>
	);
  }
  
  const rows = [
	createData('0', "Number of Incidents", "Total number of incidents that were reported to GCSOC per month", 
	"This is the final outcome that we want to drive towards. We acknowledge that this is not necessarily a good indicator of how effective our security posture as it can be also affected by the number of attacks that even take place in the first place, but we believe that this is the outcome we want to be driving for." ),
	createData("95%:5%", "Ratio of Use", "How much users actually use their CoMET devices vs their traditional GSIB devices", "We need an actual indicator that proves that this device is an improvement compared to the traditional GSIB devices. Officers are able to rely on the NGEP to perform their work effectively and do not need to rely on their GSIB for day-to-day work."),
	createData("<90s", "Time to Productivity", "How long it takes for a user to login from a cold boot to their desktop", "This is how efficient our endpoint devices are. We believe that officers should not have to wait 10-15 min for their laptop to turn on after returning from a break. The device should be able to boot up within 90s and get our officers to productivity ASAP."),
	createData('<100ms', "Latency to SG-Teams", "Measure of degree of lag for SG-Teams", " Also, as part of an efficient workplace, where Teams is a central collaborative tool for our public officer. MS documentation states that in order for teams to be effective, it needs to have less than 100ms latency, and as we more towards hybrid workplace experience, we should ensure that this tool is effective in doing so."),
	createData('>85%', "User Satisfaction", "Users who score this device a 5/5 in terms of satisfaction", "Users must be willing to score this as a 5/5 and it shows that the product meets or exceeds expectations. The user satisfaction should be a bit of a moonshot (we know about the difficulty of pleasing a singaporean), and we should continuously hold ourselves to a high standard"),
  ];


function Goals (){
	return (
		<Stack
	direction="column"
	justifyContent="center"
	alignItems="center"
	spacing={2}
	p={3}
	>

	
	<TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><b>Goal Metric</b></TableCell>
            <TableCell align="left"><b>Goal</b></TableCell>
            <TableCell align="left"><b>Goal Description</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Goal} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</Stack>
  );
} 

export default Goals;
