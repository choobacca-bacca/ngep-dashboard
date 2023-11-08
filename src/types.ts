export interface IData {
    label: string;
    value: number;
  }
  
  export interface IGroupedData {
    label: string;
    values: number[];
  }

  export interface IDateData {
    label: number;
    value: string;
  }

  export interface IBoxPlotData {
    label: string;
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
  }

  export interface IBarPlotData {
    '0_0': number;
    '0_1': number;
    '0_2': number;
    '0_3': number;
    '0_4': number;
    '0_5': number;
    '0_6': number;
    '0_7': number;
    '0_8': number;
    '0_9': number;
    '1_0': number;
  }

  export interface IBoxPlotData2 {
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
  }

export interface IAPIData {
    date: number;
    box_data: IBoxPlotData2;
    bar_data: IBarPlotData;
  }

export interface IAPIResponse {
  statusCode: number;
  headers: string;
  body: IAPIData[];
}

export interface IConsolidatedData {
  date: number;
  ngep_use_ratio_bar_chart: IData[];
  ngep_use_ratio_box_plot: IBoxPlotData;
}

export interface ITreemapData {
  label: string;
  value: number;
}

