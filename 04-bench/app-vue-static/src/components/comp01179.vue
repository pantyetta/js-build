<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01289A, calcu00322A, calcu00769B, calcu00694A, calcu01509B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01289A(seed) - calcu00322A(seed) + calcu00769B(seed) - calcu00694A(seed) + calcu01509B(seed));
</script>

<template>
  <div class="blk">comp01179: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(207 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(27 50% 50%);
  display: inline-block;
}
</style>
