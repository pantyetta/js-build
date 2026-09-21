<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01215A, calcu00279B, calcu01304B, calcu00135A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01215A(seed) - calcu00279B(seed) + calcu01304B(seed) - calcu00135A(seed));
</script>

<template>
  <div class="blk">comp01997: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(130 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(310 50% 50%);
  display: inline-block;
}
</style>
