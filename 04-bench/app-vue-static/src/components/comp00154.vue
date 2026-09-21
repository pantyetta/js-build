<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01259A, calcu01036A, calcu00931A, calcu00505B, calcu00960B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu01259A(seed) - calcu01036A(seed) + calcu00931A(seed) - calcu00505B(seed) + calcu00960B(seed));
</script>

<template>
  <div class="blk">comp00154: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(337 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(157 50% 50%);
  display: inline-block;
}
</style>
