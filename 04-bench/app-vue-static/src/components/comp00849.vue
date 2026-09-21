<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00290A, calcu00490B, calcu00448A, calcu01373A, calcu00538B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00290A(seed) - calcu00490B(seed) + calcu00448A(seed) - calcu01373A(seed) + calcu00538B(seed));
</script>

<template>
  <div class="blk">comp00849: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>
