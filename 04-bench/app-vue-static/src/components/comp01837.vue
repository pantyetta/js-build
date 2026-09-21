<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01009A, calcu00291A, calcu01140A, calcu01597B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01009A(seed) - calcu00291A(seed) + calcu01140A(seed) - calcu01597B(seed));
</script>

<template>
  <div class="blk">comp01837: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
