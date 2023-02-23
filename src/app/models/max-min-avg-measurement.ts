export interface MaxMinAvgMeasurement {
    maximun : number;
    minimun : number;
    average : number;
}

export interface Result {
id: number;
name: string;
leftForge:MaxMinAvgMeasurement;
rightForge:MaxMinAvgMeasurement;
leftBackground:MaxMinAvgMeasurement;
rightBackground:MaxMinAvgMeasurement;
leftSide:MaxMinAvgMeasurement;
rightSide:MaxMinAvgMeasurement;
}

