<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01419A, calcu00657B, calcu00889B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01419A(seed) - calcu00657B(seed) + calcu00889B(seed));
</script>

<template>
  <div class="blk">comp00067: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(355 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(175 50% 50%);
  display: inline-block;
}
</style>
