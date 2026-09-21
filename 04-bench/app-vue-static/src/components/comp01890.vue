<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01355A, calcu01399B, calcu00448B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01355A(seed) - calcu01399B(seed) + calcu00448B(seed));
</script>

<template>
  <div class="blk">comp01890: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(61 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(241 50% 50%);
  display: inline-block;
}
</style>
