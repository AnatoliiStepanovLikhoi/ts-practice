// import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchSummary } from './MatchSummary';
// import { MatchResult } from './MatchResult';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysys } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReport';

// //!Inheritance approach
// const reader = new MatchReader('football.csv');
// reader.read();

//!Interface approach
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

//! Composition approach
// const summary = new MatchSummary(
//   new WinsAnalysys('Arsenal'),
//   // new ConsoleReport()
//   new HtmlReport()
// );

//! Static methods
const matchReader = MatchReader.fromCsv('football.csv');
const summary = MatchSummary.winsAnalysisWithHtmlReport('Man City');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
