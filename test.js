import { expect, test } from 'vitest'
import { downloadResume } from './src/app/utils/resumeUtils'

test('downloadResume is a function', () => {
  expect(typeof downloadResume).toBe('function')
})
