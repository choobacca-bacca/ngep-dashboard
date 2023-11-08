import type { IData, IDateData, IBoxPlotData, IConsolidatedData } from "./types";

const BAR_CHART_DATA: IData[] = [
	{ label: "0.1", value: 100 },
	{ label: "0.2", value: 200 },
	{ label: "0.3", value: 50 },
	{ label: "0.4", value: 150 },
	{ label: "0.5", value: 30 },
	{ label: "0.6", value: 20 },
	{ label: "0.7", value: 55 },
	{ label: "0.8", value: 45 },
	{ label: "0.9", value: 78 },
	{ label: "1.0", value: 99 }
];

const BAR_CHART_DATA2: IData[] = [
	{ label: "0.1", value: 50 },
	{ label: "0.2", value: 100 },
	{ label: "0.3", value: 150 },
	{ label: "0.4", value: 200 },
	{ label: "0.5", value: 150 },
	{ label: "0.6", value: 20 },
	{ label: "0.7", value: 150 },
	{ label: "0.8", value: 60 },
	{ label: "0.9", value: 78 },
	{ label: "1.0", value: 200 }
];

const BAR_CHART_DATA3: IData[] = [
	{ label: "0.1", value: 150 },
	{ label: "0.2", value: 180 },
	{ label: "0.3", value: 20 },
	{ label: "0.4", value: 70 },
	{ label: "0.5", value: 190 },
	{ label: "0.6", value: 70 },
	{ label: "0.7", value: 30 },
	{ label: "0.8", value: 90 },
	{ label: "0.9", value: 278 },
	{ label: "1.0", value: 240 }
];

const BOX_DATA: IBoxPlotData = {label: "13th Oct 2023",min: 0.1, q1: 0.2, median: 0.4, q3: 0.5, max: 1.0};
const BOX_DATA2: IBoxPlotData = {label: "29th Sep 2023",min: 0.2, q1: 0.3, median: 0.35, q3: 0.6, max: 1.0};
const BOX_DATA3: IBoxPlotData = {label: "15th Sep 2023",min: 0.3, q1: 0.25, median: 0.5, q3: 0.55, max: 1.0};

export const CONS_DATA: IConsolidatedData[] = [{ 
        date: 20231013,
        ngep_use_ratio_bar_chart: BAR_CHART_DATA,
        ngep_use_ratio_box_plot: BOX_DATA
    },
    { 
        date: 20230929,
        ngep_use_ratio_bar_chart: BAR_CHART_DATA2,
        ngep_use_ratio_box_plot: BOX_DATA2
    },
    { 
        date: 20230915,
        ngep_use_ratio_bar_chart: BAR_CHART_DATA3,
        ngep_use_ratio_box_plot: BOX_DATA3
    }
];