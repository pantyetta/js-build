<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01235B, calcu01062B, calcu01190A, calcu01390A, calcu01055B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01235B(seed) - calcu01062B(seed) + calcu01190A(seed) - calcu01390A(seed) + calcu01055B(seed));
</script>

<template>
  <div class="blk">comp00984: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(12 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(192 50% 50%);
  display: inline-block;
}
</style>
