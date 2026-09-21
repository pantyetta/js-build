<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01449B, calcu00084B, calcu00027A, calcu01350A, calcu01500A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01449B(seed) - calcu00084B(seed) + calcu00027A(seed) - calcu01350A(seed) + calcu01500A(seed));
</script>

<template>
  <div class="blk">comp00597: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
