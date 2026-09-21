<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00161B, calcu00341A, calcu00761A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00161B(seed) - calcu00341A(seed) + calcu00761A(seed));
</script>

<template>
  <div class="blk">comp00825: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(166 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(346 50% 50%);
  display: inline-block;
}
</style>
