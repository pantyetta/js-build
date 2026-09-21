<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01182B, calcu00619A, calcu00901A, calcu00728A, calcu01173A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01182B(seed) - calcu00619A(seed) + calcu00901A(seed) - calcu00728A(seed) + calcu01173A(seed));
</script>

<template>
  <div class="blk">comp01231: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>
