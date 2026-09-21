<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01126B, calcu01382B, calcu00549A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01126B(seed) - calcu01382B(seed) + calcu00549A(seed));
</script>

<template>
  <div class="blk">comp00814: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(14 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(194 50% 50%);
  display: inline-block;
}
</style>
