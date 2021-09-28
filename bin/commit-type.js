const inquirer = require('inquirer')
const { CHOICES } = require('../src/choices')

const setCommitType = async () => {
  return await inquirer.prompt({
    name: 'typeOfCommit',
    message: 'Que haras en tu commit?',
    type: 'list',
    choices: CHOICES.COMMIT,
  })
}

module.exports = {
  setCommitType,
}
