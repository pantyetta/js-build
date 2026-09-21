<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00093A, calcu00131B, calcu00136A, calcu01416A, calcu01162A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00093A(seed) - calcu00131B(seed) + calcu00136A(seed) - calcu01416A(seed) + calcu01162A(seed));
</script>

<template>
  <div class="blk">comp01585: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>
