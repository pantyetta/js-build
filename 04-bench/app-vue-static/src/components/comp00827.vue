<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00599A, calcu00302A, calcu01100B, calcu00232A, calcu00505B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00599A(seed) - calcu00302A(seed) + calcu01100B(seed) - calcu00232A(seed) + calcu00505B(seed));
</script>

<template>
  <div class="blk">comp00827: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(157 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(337 50% 50%);
  display: inline-block;
}
</style>
