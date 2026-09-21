<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00203B, calcu01014B, calcu01225B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00203B(seed) - calcu01014B(seed) + calcu01225B(seed));
</script>

<template>
  <div class="blk">comp00520: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
