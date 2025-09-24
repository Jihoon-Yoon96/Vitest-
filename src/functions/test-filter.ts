// vitest 테스트 코드 예제 3 - 테스트 필터링
import {describe, test} from 'vitest';

describe('example group', () => {
    test.skip('example test 1', () => {}) // 테스트 스킵

    test.only('example test 2', () => {}) // 이거만 테스트 실행

    test.todo('example test 3', () => {}) // 테스트 스킵 (미완성 함수 / 테스트 코드 미리 작성할 때 유용)

    test.skipIf(false)('example test 4', () => {}) // 조건부 테스트
    // test.skipIf(process.env.NODE_ENV)('example test 4', () => {})
})
