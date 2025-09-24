import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        // include: [
        //     // 'src/**/*.spec.ts'
        //     '**/check-is-two.spec.ts'
        // ],
        reporters: ['default', 'verbose'],
    }
})