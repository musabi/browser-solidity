var yo = require('yo-yo')

// -------------- styling ----------------------
var csjs = require('csjs-inject')

var css = csjs`
  .debuggerTabView {
    padding: 2%;
  }
  .debugger {
    margin-bottom: 1%;
  }
`

module.exports = debuggerTab

function debuggerTab (container, appAPI, events, opts) {
  var el = yo`
    <div class="${css.debuggerTabView} "id="debugView">
      <div id="debugger" class="${css.debugger}"></div>
    </div>`
  container.appendChild(el)
}
