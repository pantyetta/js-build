<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00102A, calcu00005B, calcu00924B, calcu00910A, calcu01288A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00102A(seed) - calcu00005B(seed) + calcu00924B(seed) - calcu00910A(seed) + calcu01288A(seed));
</script>

<template>
  <div class="blk">comp01659: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
