import { Injectable } from '@angular/core';
import { DerpData } from './app.constants';

export interface DerpRangeToTotal {
  range: string;
  totalCharges: number;
  countPerRange: number;
}

@Injectable({
  providedIn: 'root'
})
export class DerpService {
  INSURANCE_DATA = DerpData.INSURANCE_DATA;

  constructor() { }

  getDerpData(): DerpRangeToTotal[] {
    const myData: DerpRangeToTotal[] = [
      {range: '<10', totalCharges: 0, countPerRange: 0}, // index 0
      {range: '10-20', totalCharges: 0, countPerRange: 0}, // index 1
      {range: '20-30', totalCharges: 0, countPerRange: 0}, // index 2
      {range: '30-40', totalCharges: 0, countPerRange: 0}, // index 3
      {range: '>40', totalCharges: 0, countPerRange: 0}, // index 4
    ]
    // iterate over the insurance data variable
    for(let i = 0; i < this.INSURANCE_DATA.length; i += 1) {
      // '19,female,27.9,0,yes,southwest,16884.924'
      const row: string[] = this.INSURANCE_DATA[i].split(','); // --> ['19', 'female', '27.9', '0', 'yes', 'southwest', '16884.924']
      const bmi: number = parseFloat(row[2]); // --> parseFloat('27.9')
      const totalChargeForRow = parseFloat(row[6]); // --> parseFloat('16884.924')
      const age: number = parseInt(row[0]); // --> parseInt('19');
      
      if (bmi < 10) {
        myData[0].totalCharges += totalChargeForRow;
        myData[0].countPerRange += 1;
      } else if (bmi >= 10 && bmi < 20) {
        myData[1].totalCharges += totalChargeForRow;
        myData[1].countPerRange += 1;
      } else if (bmi >= 20 && bmi < 30) {
        myData[2].totalCharges += totalChargeForRow;
        myData[2].countPerRange += 1;
      } else if (bmi >= 30 && bmi < 40) {
        myData[3].totalCharges += totalChargeForRow;
        myData[3].countPerRange += 1;
      } else if (bmi > 40) {
        // greater than case
        myData[4].totalCharges += totalChargeForRow;
        myData[4].countPerRange += 1;
      }
    }
    return myData;
  }
}
