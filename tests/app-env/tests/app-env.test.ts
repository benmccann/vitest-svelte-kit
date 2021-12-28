import { test, expect } from 'vitest'

// @ts-ignore
import * as env from '$app/env'

test('ensure $app/env is polyfilled', () => {
    expect(env).toMatchInlineSnapshot(`
{
  "amp": false,
  "browser": false,
  "dev": true,
  "mode": "development",
  "prerendering": false,
}`)
})