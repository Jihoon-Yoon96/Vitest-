// vitest 테스트 코드 예제 2
import {describe, test, expect} from 'vitest'
import {checkIsTwo} from './check-is-two'

describe('checkIsTwo', () => {
  test('not 2 -> false', () => {
    const target = 1
    const result = checkIsTwo(target)
    expect(result).toBe(false)
  })

  test('2 -> true', () => {
    const target = 2
    const result = checkIsTwo(target)
    expect(result).toBe(true)
  })
})