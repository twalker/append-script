import {assert} from 'chai'
import appendScript from '../dist/append-script'

describe('appendScript(url)', ()=>{
  it('should load a script into the head', ()=>{
    appendScript('fixture.js')
      .then( () => console.log('success'))
      .catch( (e) => console.log('fail', e))
  })
})
