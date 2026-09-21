<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00304A, calcu01395A, calcu01231A, calcu01160B, calcu00974A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00304A(seed) - calcu01395A(seed) + calcu01231A(seed) - calcu01160B(seed) + calcu00974A(seed));
</script>

<template>
  <div class="blk">comp00116: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>
