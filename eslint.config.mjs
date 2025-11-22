import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      // 🔹 Enforce 2-space indentation everywhere (JS, TS, JSX)
      'indent': ['error', 2, {
        SwitchCase: 1,
        ignoredNodes: [
          'TemplateLiteral *', // Prevent false positives in styled-jsx / template strings
        ],
      }],
      
      // 🔹 Specifically handle JSX indentation
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      
      // Other style/consistency rules (optional but recommended)
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'no-unused-vars': ['warn'],
      'linebreak-style': ['error', 'windows'],
    },
  }
]);

export default eslintConfig;
