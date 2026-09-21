<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01042B, calcu01072B, calcu01067B, calcu01276B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01042B(seed) - calcu01072B(seed) + calcu01067B(seed) - calcu01276B(seed));
</script>

<template>
  <div class="blk">comp01665: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(221 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(41 50% 50%);
  display: inline-block;
}
</style>
