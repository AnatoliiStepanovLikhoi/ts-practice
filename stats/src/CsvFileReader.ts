import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((item: string[]): any => [
        dateStringToDate(item[0]),
        item[1],
        item[2],
        parseInt(item[3]),
        parseInt(item[4]),
        item[5] as MatchResult,
        item[6],
      ]);
  }
}
