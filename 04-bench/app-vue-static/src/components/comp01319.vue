<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01337A, calcu00378A, calcu00587A, calcu01074A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01337A(seed) - calcu00378A(seed) + calcu00587A(seed) - calcu01074A(seed));
</script>

<template>
  <div class="blk">comp01319: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(211 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(31 50% 50%);
  display: inline-block;
}
</style>
