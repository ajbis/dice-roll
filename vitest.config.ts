import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      restoreMocks: true,
      setupFiles: ['./vitest.setup.ts'],
      include: ['**/__tests__/**/*.test.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['**/__tests__/**', '**/*.test.{ts,tsx}'],
      },
    },
  }),
);
