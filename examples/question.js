const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer
const download = require('download-git-repo');// https://www.npmjs.com/package/download-git-repo
const ora = require('ora');// https://www.npmjs.com/package/ora

inquirer.prompt(
  [
    {
      type: 'confirm',
      name: 'OK',
      message: '下载选择的模版?',
      default: false
    }
  ]
).then(
  answers => {
    if (answers.OK === true) {
      const spinner = ora('正在下载').start();
      download(
        'flippidippi/download-git-repo-fixture', 'test/tmp', err => {
          err ?
            spinner.succeed(chalk.green('下载成功'))
            :
            spinner.fail(chalk.red('下载失败'))
        }
      )
    }
  }
);