<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01063B, calcu00667B, calcu01053B, calcu00454B, calcu01219A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01063B(seed) - calcu00667B(seed) + calcu01053B(seed) - calcu00454B(seed) + calcu01219A(seed));
</script>

<template>
  <div class="blk">comp01122: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(253 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(73 50% 50%);
  display: inline-block;
}
</style>
