const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                  <img src="https://placekitten.com" alt="Placekitten.com" />
                </div>
                <div>
                Photo by <a href="https://placekitten.com">Mark James</a> on <a href="https://placekitten.com">Placekitten.com</a>
                </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404