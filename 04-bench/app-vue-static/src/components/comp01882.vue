<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00942A, calcu00509B, calcu01491A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00942A(seed) - calcu00509B(seed) + calcu01491A(seed));
</script>

<template>
  <div class="blk">comp01882: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>
