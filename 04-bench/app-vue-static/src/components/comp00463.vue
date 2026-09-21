<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00177B, calcu00221A, calcu01578B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00177B(seed) - calcu00221A(seed) + calcu01578B(seed));
</script>

<template>
  <div class="blk">comp00463: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(29 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(209 50% 50%);
  display: inline-block;
}
</style>
