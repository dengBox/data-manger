import pkg from '../package.json'

describe('antd dist files', () => {
  it('should have bxh-color.version', () => {
    const antd = require('../lib/index')
    expect(antd.version).toBe(pkg.version)
  })
})
