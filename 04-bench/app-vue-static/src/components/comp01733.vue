<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00187B, calcu00387B, calcu00602A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00187B(seed) - calcu00387B(seed) + calcu00602A(seed));
</script>

<template>
  <div class="blk">comp01733: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(190 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(10 50% 50%);
  display: inline-block;
}
</style>
