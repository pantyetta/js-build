<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00289B, calcu01598A, calcu01087B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00289B(seed) - calcu01598A(seed) + calcu01087B(seed));
</script>

<template>
  <div class="blk">comp01647: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>
