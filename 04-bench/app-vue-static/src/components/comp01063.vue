<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00109B, calcu00179A, calcu00386B, calcu01535B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00109B(seed) - calcu00179A(seed) + calcu00386B(seed) - calcu01535B(seed));
</script>

<template>
  <div class="blk">comp01063: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
