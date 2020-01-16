const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer
const download = require('download-git-repo');// https://www.npmjs.com/package/download-git-repo
const ora = require('ora');// https://www.npmjs.com/package/ora

inquirer.prompt(
  [
    {
      type: 'list',
      name: 'choose',
      message: '下载选择的模版?',
      choices: [
        { name: '哈哈哈', value: 'flippidippi/download-git-repo-fixture' },
        { name: '嘿嘿嘿', value: 'flippidippi/download-git-repo-fixture' },
      ]
    }
  ]
).then(
  answers => {
    console.log(answers);
    const spinner = ora('正在下载').start();
    download(
      answers.choose, 'test/tmp', err => {
        err ?
          spinner.fail(chalk.red('下载失败：', err))
          :
          spinner.succeed(chalk.green('下载成功'))
      }
    )
  }
);


