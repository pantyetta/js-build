<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01359B, calcu00902A, calcu01363A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01359B(seed) - calcu00902A(seed) + calcu01363A(seed));
</script>

<template>
  <div class="blk">comp00452: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
