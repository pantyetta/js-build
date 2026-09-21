<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00328A, calcu00043B, calcu01563B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00328A(seed) - calcu00043B(seed) + calcu01563B(seed));
</script>

<template>
  <div class="blk">comp01639: {{ total }}</div>
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
