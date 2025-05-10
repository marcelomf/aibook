import commandLineArgs from "command-line-args";
import { Ebook } from "./ebook";

const HELP = `Welcome to intelibook!!!\n
  ibook [command] [--options]
  ibook help -> This option.
  ibook gen [--subject|--model|--output-dir] -> Generate eBook.
`;

async function processArgs() {
  const mainDefinitions = [
    { name: 'command', defaultOption: true }
  ]
  const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })

  let argv = mainOptions._unknown || []

  if (mainOptions.command === 'help') {
    console.log(HELP);
    process.exit(0);
  } else if (mainOptions.command === 'gen') {
    const options = [
      { name: 'subject', alias: 's' },
      { name: 'model', alias: 'm' },
      { name: 'output-dir', alias: 'o' }
    ]
    const runOptions = commandLineArgs(options, { argv, stopAtFirstUnknown: true });

    if(!runOptions['subject']) {
      console.log(HELP);
      process.exit(-1);
    }

    const ebook = new Ebook(runOptions['subject'], runOptions['model'], runOptions['output-dir']);

    await ebook.genEbook();

    return;
  } else {
    console.log(HELP);
    process.exit(-1);
  }
}

processArgs();