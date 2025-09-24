// vitest 테스트 코드 예제 4 - 라이프 사이클 1
import {describe, test, beforeEach, afterEach, afterAll, beforeAll} from 'vitest'

describe('life-cycle', () => {
    /** setup **/
    // 각 테스트들이 실행되기 전에 실행
    beforeEach(() => {
        console.log('beforeEach - 각 테스트들이 실행되기 전에 매번 실행')
    })
    // 테스트 시작 전에 딱 한번만 실행
    beforeAll(() => {
        console.log('beforeAll - 테스트 시작 전에 딱 한번만 실행')
    })

    /** teardown **/
    // 각 테스트들이 끝난 뒤 실행
    afterEach(() => {
        console.log('afterEach - 각 테스트들이 끝난 뒤 매번 실행')
    })
    // 모든 테스트가 끝난 뒤 실행
    afterAll(() => {
        console.log('afterAll - 테스트가 모두 끝난 뒤 딱 한번만 실행')
    })


    test('test 1', () => {
        console.log('test 1');
        
    })
    test('test 2', () => {
        console.log('test 2');
    })
    
})

// 병렬 테스트
describe.concurrent('concurrent', () => {
    test('test 1', async () => {
        console.log('concurrent - test 1 start');
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('concurrent - test 1 end');
    })
    test('test 2', async () => {
        console.log('concurrent - test 2 start');
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log('concurrent - test 2 end');
    })
    test('test 3', async () => {
        console.log('concurrent - test 3 start');
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log('concurrent - test 3 end');
    })
})

// 순차 테스트
describe.sequential('sequential', () => {
    test('test 1', async () => {
        console.log('sequential - test 1 start');
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('sequential - test 1 end');
    })
    test('test 2', async () => {
        console.log('sequential - test 2 start');
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log('sequential - test 2 end');
    })
    test('test 3', async () => {
        console.log('sequential - test 3 start');
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log('sequential - test 3 end');
    })
})


// 랜덤 테스트
describe.shuffle('shuffle', () => {
    test('shuffle test 1', async () => {
        console.log('shuffle - test 1 start');
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('shuffle - test 1 end');
    })
    test('shuffle test 2', async () => {
        console.log('shuffle - test 2 start');
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log('shuffle - test 2 end');
    })
    test('shuffle test 3', async () => {
        console.log('shuffle - test 3 start');
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log('shuffle - test 3 end');
    })
})