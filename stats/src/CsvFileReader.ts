import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (item: string[]): MatchData => [
          dateStringToDate(item[0]),
          item[1],
          item[2],
          parseInt(item[3]),
          parseInt(item[4]),
          item[5] as MatchResult,
          item[6],
        ]
      );
  }
}
