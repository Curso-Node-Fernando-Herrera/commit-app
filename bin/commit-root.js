const inquirer = require('inquirer')

const setCommitRoot = async () => {
  const objResponse = await inquirer.prompt({
    type: 'input',
    name: 'nameRoot',
    message: 'En que directorio va a estar?',
    default: 'Root',
  })

  const { nameRoot } = objResponse
  return nameRoot
}

module.exports = { setCommitRoot }
