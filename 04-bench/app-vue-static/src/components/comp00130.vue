<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01211A, calcu01059B, calcu01148B, calcu01479B, calcu00743B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01211A(seed) - calcu01059B(seed) + calcu01148B(seed) - calcu01479B(seed) + calcu00743B(seed));
</script>

<template>
  <div class="blk">comp00130: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(244 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(64 50% 50%);
  display: inline-block;
}
</style>
