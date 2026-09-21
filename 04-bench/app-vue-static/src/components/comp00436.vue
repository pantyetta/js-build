<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01530A, calcu01330B, calcu00190B, calcu01304B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01530A(seed) - calcu01330B(seed) + calcu00190B(seed) - calcu01304B(seed));
</script>

<template>
  <div class="blk">comp00436: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
