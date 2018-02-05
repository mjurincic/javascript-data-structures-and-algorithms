const { performance } = require('perf_hooks')
var colors = require('colors')

import {fizzBuzz1, fizzBuzz2} from '../fizzbuzz'

const displayPerfTime = (testName, fn) => {
  const t0 = performance.now()
  fn()
  const t1 = performance.now()

  const roundedTime = (t1 - t0).toFixed(4)

  console.log(`⏱ 🚀 Call to ` + `${testName}`.bold.green + ` took ` + `${roundedTime}ms.`.bold.blue)
}

describe('Fizz-Buzz', () => {
  const vals = [
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
    17,
    'Fizz',
    19,
    'Buzz',
    'Fizz',
    22,
    23,
    'Fizz',
    'Buzz',
    26,
    'Fizz',
    28,
    29,
    'FizzBuzz',
    31,
    32,
    'Fizz',
    34,
    'Buzz',
    'Fizz',
    37,
    38,
    'Fizz',
    'Buzz',
    41,
    'Fizz',
    43,
    44,
    'FizzBuzz',
    46,
    47,
    'Fizz',
    49,
    'Buzz',
    'Fizz',
    52,
    53,
    'Fizz',
    'Buzz',
    56,
    'Fizz',
    58,
    59,
    'FizzBuzz',
    61,
    62,
    'Fizz',
    64,
    'Buzz',
    'Fizz',
    67,
    68,
    'Fizz',
    'Buzz',
    71,
    'Fizz',
    73,
    74,
    'FizzBuzz',
    76,
    77,
    'Fizz',
    79,
    'Buzz',
    'Fizz',
    82,
    83,
    'Fizz',
    'Buzz',
    86,
    'Fizz',
    88,
    89,
    'FizzBuzz',
    91,
    92,
    'Fizz',
    94,
    'Buzz',
    'Fizz',
    97,
    98,
    'Fizz',
    'Buzz'
  ]

  it('should pass with fizzBuzz1', () => {
    expect(fizzBuzz1(100)).toEqual(vals)
  })

  it('should pass with fizzBuzz2', () => {
    expect(fizzBuzz2(100)).toEqual(vals)
  })

  describe('Performance', () => {


it('will display perftime, num=10', () => {
  displayPerfTime('fizzBuzz1(10)', () => {
    fizzBuzz1(10)
  })
  displayPerfTime('fizzBuzz2(10)', () => {
    fizzBuzz2(10)
  })
})

it('will display perftime, num=100', () => {
  displayPerfTime('fizzBuzz1(100)', () => {
    fizzBuzz1(10)
  })
  displayPerfTime('fizzBuzz2(100)', () => {
    fizzBuzz2(10)
  })
})

it('will display perftime, num=1000', () => {
  displayPerfTime('fizzBuzz1(1000)', () => {
    fizzBuzz1(10)
  })
  displayPerfTime('fizzBuzz2(1000)', () => {
    fizzBuzz2(10)
  })
})



  })
})