// vitest 테스트 코드 예제 4 - 라이프 사이클 2
import {describe, test} from 'vitest'
import { delay } from '../libs/delay'

/** 
 * 테스트 순서 예제 - 디폴트(작렬)
 * 딜레이 시간이 적은 2번 항목이 먼저 끝나야 하지만, 직렬로 실행되기 때문에 1번 항목이 먼저 끝나게 된다.
 * */ 
describe('디폴트 순서', () => {
    // 실행순서 1번, 완료순서 1번
    test('직렬제어 test 1', async () => {
        console.log('디폴트 순서 - test 1 start');
        await delay(1000)
        console.log('디폴트 순서 - test 1 end');
    })
    // 실행순서 2번, 완료순서 2번
    test('직렬제어 test 2', async () => {
        console.log('디폴트 순서 - test 2 start');
        await delay(500)
        console.log('디폴트 순서 - test 2 end');
    })
})

/** 
 * 테스트 순서 예제 - 직렬
 * 딜레이 시간이 적은 2번 항목이 먼저 끝나야 하지만, 직렬로 실행되기 때문에 1번 항목이 먼저 끝나게 된다.
 * */
describe.sequential('순차 순서', () => {
    // 실행순서 1번, 완료순서 1번
    test('순차제어 test 1', async () => {
        console.log('순차 순서 - test 1 start');
        await delay(1000)
        console.log('순차 순서 - test 1 end');
    })
    // 실행순서 2번, 완료순서 2번
    test('순차제어 test 2', async () => {
        console.log('순차 순서 - test 2 start');
        await delay(500)
        console.log('순차 순서 - test 2 end');
    })
})

/** 
 * 테스트 순서 예제 - 병렬
 * 딜레이 시간이 적은 2번 항목이 먼저 끝나게 된다.
 * sequential 키워드를 사용한 3, 4번 항목은 1, 2번 항목이 모두 끝난 후에 실행된다.
 * */ 
describe.concurrent('병렬 순서', () => {
    // 실행순서 1번, 완료순서 2번
    test('병렬제어 test 1', async () => {
        console.log('병렬 순서 - test 1 start');
        await delay(1000)
        console.log('병렬 순서 - test 1 end');
    })
    // 실행순서 2번, 완료순서 1번
    test('병렬제어 test 2', async () => {
        console.log('병렬 순서 - test 2 start');
        await delay(500)
        console.log('병렬 순서 - test 2 end');
    })

    test.sequential('순차제어 test 3', async () => {
        console.log('병렬 순서 - test 3 start (sequential)');
        await delay(700)
        console.log('병렬 순서 - test 3 end (sequential)');
    })
    test.sequential('순차제어 test 4', async () => {
        console.log('병렬 순서 - test 4 start (sequential)');
        await delay(300)
        console.log('병렬 순서 - test 4 end (sequential)');
    })
})