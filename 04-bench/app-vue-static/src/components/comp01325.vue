<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00281A, calcu00883A, calcu01457B, calcu01106B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00281A(seed) - calcu00883A(seed) + calcu01457B(seed) - calcu01106B(seed));
</script>

<template>
  <div class="blk">comp01325: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>
