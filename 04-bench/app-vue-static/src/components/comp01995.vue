<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00411B, calcu01135B, calcu01394A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00411B(seed) - calcu01135B(seed) + calcu01394A(seed));
</script>

<template>
  <div class="blk">comp01995: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>
