const { setCommitRoot } = require('../bin/commit-root')
const { setCommitType } = require('../bin/commit-type')

const getMenu = async () => {
  console.clear()
  const typeSelected = await setCommitType()
  const rootName = await setCommitRoot()

  console.log({ typeSelected, rootName })
}

getMenu()
