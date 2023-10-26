// import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysys } from './analyzers/WinsAnalysis';
import { MatchSummary } from './MatchSummary';

// //!Inheritance approach
// const reader = new MatchReader('football.csv');
// reader.read();

//!Interface approach
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//! Composition approach
const summary = new MatchSummary(
  new WinsAnalysys('Arsenal'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
