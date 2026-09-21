<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01203A, calcu00871A, calcu00311B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01203A(seed) - calcu00871A(seed) + calcu00311B(seed));
</script>

<template>
  <div class="blk">comp00281: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>
