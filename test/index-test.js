const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })

  describe('receivesAFunction(callback)', () => {
    it('receives a function and calls it', () => {
      const spy = expect.createSpy()

      receivesAFunction(spy)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('returnsANamedFunction()', () => {
    var fn

    before(() => {
      fn = returnsANamedFunction()
    })

    it('returns a function', () => {
      expect(fn).toBeA('function')
    })

    it('returns a named function', () => {
      expect(fn.name).toNotEqual('')
    })
  })

  describe('returnsAnAnonymousFunction()', () => {
    var fn

    before(() => {
      fn = returnsAnAnonymousFunction()
    })

    it('returns a function', () => {
      expect(fn).toBeA('function')
    })

    it('returns an anonymous function', () => {
      expect(fn.name).toEqual('')
    })
  })
})
