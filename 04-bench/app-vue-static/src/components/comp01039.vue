<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00034A, calcu00983B, calcu00655A, calcu01442B, calcu00847B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00034A(seed) - calcu00983B(seed) + calcu00655A(seed) - calcu01442B(seed) + calcu00847B(seed));
</script>

<template>
  <div class="blk">comp01039: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>
