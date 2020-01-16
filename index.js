const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer
const download = require('download-git-repo');// https://www.npmjs.com/package/download-git-repo

inquirer.prompt(
  [
    {
      type: 'confirm',
      name: 'OK',
      message: '下载选择的模版?',
      default: false
    }
  ]
)
  .then(
    answers => {
      if (answers.OK === true) {
        download(
          'flippidippi/download-git-repo-fixture', 'test/tmp', function (err) {
            console.log(chalk.blue(err ? 'Error' : 'Success'))
          }
        )
      }
    }
  );


