<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00039B, calcu01541A, calcu01180A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00039B(seed) - calcu01541A(seed) + calcu01180A(seed));
</script>

<template>
  <div class="blk">comp01135: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(175 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(355 50% 50%);
  display: inline-block;
}
</style>
