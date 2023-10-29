import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(item: string[]): MatchData {
    return [
      dateStringToDate(item[0]),
      item[1],
      item[2],
      parseInt(item[3]),
      parseInt(item[4]),
      item[5] as MatchResult,
      item[6],
    ];
  }
}
