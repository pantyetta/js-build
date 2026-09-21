<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00845A, calcu01124A, calcu01483B, calcu01106B, calcu00289A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00845A(seed) - calcu01124A(seed) + calcu01483B(seed) - calcu01106B(seed) + calcu00289A(seed));
</script>

<template>
  <div class="blk">comp00956: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(239 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(59 50% 50%);
  display: inline-block;
}
</style>
