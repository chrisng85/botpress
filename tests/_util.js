const genid = require('nanoid/generate')

const safeAlphabet = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789'].join('')

exports.randomTableName = (prefix = 'tmp_') => `${prefix}${genid(safeAlphabet, 20)}`
