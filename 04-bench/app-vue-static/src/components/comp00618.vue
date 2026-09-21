<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00132B, calcu01053A, calcu00912A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00132B(seed) - calcu01053A(seed) + calcu00912A(seed));
</script>

<template>
  <div class="blk">comp00618: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(354 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(174 50% 50%);
  display: inline-block;
}
</style>
