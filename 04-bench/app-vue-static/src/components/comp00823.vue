<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01409B, calcu00621B, calcu01161B, calcu00754A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01409B(seed) - calcu00621B(seed) + calcu01161B(seed) - calcu00754A(seed));
</script>

<template>
  <div class="blk">comp00823: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>
