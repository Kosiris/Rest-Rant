const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
          </main>
        </Def>
    )
}

module.exports = show
