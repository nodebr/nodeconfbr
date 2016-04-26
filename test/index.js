'use strict'

let testsContext = require.context('./spec', true)
testsContext.keys().forEach(testsContext)
