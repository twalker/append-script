import chai from 'node_modules/chai/chai'
import appendScript from 'lib/append-script'

var assert = chai.assert;

describe('appendScript(url)', ()=>{

  it('should load a script into the head', (done)=>{
    appendScript('fixture.js')
      .then( () => {
        assert.equal(window.foo, 'bar')
        done()
      })
      .catch(done)
  })

  it('should load external scripts', (done)=>{
    appendScript('http://code.jquery.com/jquery-2.1.3.min.js')
    .then( () => {
      assert(window.$)
      done()
    })
    .catch( done)
  })

  it('should reject on network errors', (done)=>{
    appendScript('no-exist.js')
    .catch( (e) => {
      assert(e)
      done()
    });
  })

})
