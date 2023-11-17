// NGEPDashboard.js 
import React, { useState } from 'react';
import '../components/Metric-Components/UseRatioBarChart'
import { BarChart } from '../components/Metric-Components/UseRatioBarChart';
import { BoxPlotChart } from '../components/BoxAndWhiskComponent/BoxAndWhiskerChart';
import type { IAPIResponse, IAPIData } from "../types";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const defaultMetricsData:IAPIData[] = [];
const defaultChartData: IAPIData = {
	date: 0,
	box_data: {
		min: 0,
		q1: 0,
		median: 0,
		q3: 0,
		max: 0
	},
	bar_data: {
		'0_0': 0,
		'0_1': 0,
		'0_2': 0,
		'0_3': 0,
		'0_4': 0,
		'0_5': 0,
		'0_6': 0,
		'0_7': 0,
		'0_8': 0,
		'0_9': 0,
		'1_0': 0
	}

};
const months: string[] = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function DateToString(dateNumber: number){
	var date: string = "";
	var dateArray: number[] = [];
	const dateNumberString: string = String(dateNumber);
	for (var i:number = 0, len:number = dateNumberString.length; i <len; i += 2 ){
		dateArray.push(+dateNumberString.charAt(i).concat(dateNumberString.charAt(i+1)));
	}
	date = String(dateArray[3]) + " " + months[dateArray[2]-1] + " " + String(dateArray[0])+String(dateArray[1]);

	return date;
};

function Dashboard() {
	
	const [metricsData, setMetricsData]: [IAPIData[], (metricsData: IAPIData[]) => void] = React.useState(defaultMetricsData);
	const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
	const [error, setError]: [string, (error: string) => void] = React.useState("");

	  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	  const [menuLabel, setMenuLabel] = React.useState<string>("");
	  const [chartData, setChartData] = React.useState<IAPIData>(defaultChartData);
	  const open = Boolean(anchorEl);
	  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	  };
	  const handleClose = (item: number, index: number) => {
		setAnchorEl(null);
		setMenuLabel(DateToString(item));
		setChartData(metricsData[index]);
	  };


	

	React.useEffect(() => {
		axios
		  .get<IAPIResponse>("https://2xvt50i7cb.execute-api.ap-southeast-1.amazonaws.com/staging/ngep-metrics", {
			headers: {
			  "Content-Type": "application/json"
			},
		  })
		  .then(response => {
			setMetricsData(response.data.body);
			setMenuLabel(DateToString(response.data.body[0].date));
			setChartData(response.data.body[0]);
			setLoading(false);})
		  .catch(ex => {
			const error =
			ex.response.status === 404
			  ? "Resource Not found"
			  : "An unexpected error has occurred";
			setError(error);
			setLoading(false);
		  });
	  }, []);
	
	if (loading)
	{
	  return <div className="App">Loading...</div>;
	}
		
	  return (
		<div>
		  <Button
			id="basic-button"
			aria-controls={open ? "basic-menu" : undefined}
			aria-haspopup="true"
			aria-expanded={open ? "true" : undefined}
			onClick={handleClick}
		  >
			{menuLabel}
		  </Button>
		  <Menu
			id="basic-menu"
			anchorEl={anchorEl}
			open={open}
			// onClose={handleClose}
			MenuListProps={{
			  "aria-labelledby": "basic-button"
			}}
		  >
			{metricsData.map((value, index) => {
				const date: string = String(value.date);
				const dateString: string = DateToString(value.date);
			  return(
				<MenuItem onClick={() => handleClose(value.date, index)}> {dateString}</MenuItem>
			  );
			  })
			}
		  </Menu>

		  	<div>
				<BarChart {...chartData}></BarChart>
			</div>
			<div>
				<BoxPlotChart {...chartData}></BoxPlotChart>
			</div>

		</div>
	  );
}

export default Dashboard;
