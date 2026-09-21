<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00073B, calcu00651B, calcu01177B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00073B(seed) - calcu00651B(seed) + calcu01177B(seed));
</script>

<template>
  <div class="blk">comp00456: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(104 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(284 50% 50%);
  display: inline-block;
}
</style>
