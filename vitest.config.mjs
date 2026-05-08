import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/src/**/*.{test,spec}.[tj]s', 'tests/**/*.js'],
  },
});
