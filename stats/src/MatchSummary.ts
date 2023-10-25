import { Interface } from 'readline';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class MatchSummary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
