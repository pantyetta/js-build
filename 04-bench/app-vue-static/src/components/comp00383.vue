<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00334B, calcu01072B, calcu00442B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00334B(seed) - calcu01072B(seed) + calcu00442B(seed));
</script>

<template>
  <div class="blk">comp00383: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>
