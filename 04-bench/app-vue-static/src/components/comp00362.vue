<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01545A, calcu01013A, calcu01209A, calcu00722B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01545A(seed) - calcu01013A(seed) + calcu01209A(seed) - calcu00722B(seed));
</script>

<template>
  <div class="blk">comp00362: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>
