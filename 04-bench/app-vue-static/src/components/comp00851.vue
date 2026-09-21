<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580A, calcu00042A, calcu01018A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00580A(seed) - calcu00042A(seed) + calcu01018A(seed));
</script>

<template>
  <div class="blk">comp00851: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
