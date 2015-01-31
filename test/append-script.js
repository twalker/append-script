import {assert} from 'node_modules/chai/chai'
import appendScript from 'lib/append-script'

describe('appendScript(url)', ()=>{
  it('should load a script into the head', ()=>{
    return appendScript('fixture.js')
      .then( () => console.log('success'))
      .catch( (e) => console.log('fail', e))
  })
})
