<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00550A, calcu00767A, calcu00888A, calcu00984B, calcu01584A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00550A(seed) - calcu00767A(seed) + calcu00888A(seed) - calcu00984B(seed) + calcu01584A(seed));
</script>

<template>
  <div class="blk">comp00459: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(107 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(287 50% 50%);
  display: inline-block;
}
</style>
