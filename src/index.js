const { setCommitRoot } = require('../bin/commit-root')
const { setCommitType } = require('../bin/commit-type')

const getMenu = async () => {
  console.clear()
  const typeSelected = await setCommitType()
  setCommitRoot(typeSelected)
}

getMenu()
