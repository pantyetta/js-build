<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00278A, calcu01076B, calcu01057A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00278A(seed) - calcu01076B(seed) + calcu01057A(seed));
</script>

<template>
  <div class="blk">comp00346: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
