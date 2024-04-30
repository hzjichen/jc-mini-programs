import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import pluginpRettier from 'eslint-plugin-prettier';
export default [
  {
    languageOptions: {
      parser: vueParser, // 使用vue解析器，这个可以识别vue文件
      parserOptions: {
        parser: tseslint.parser, // 在vue文件上使用ts解析器
        sourceType: 'module'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...pluginpRettier.configs.recommended
];
