<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01213A, calcu01302B, calcu00432B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01213A(seed) - calcu01302B(seed) + calcu00432B(seed));
</script>

<template>
  <div class="blk">comp01774: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(343 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(163 50% 50%);
  display: inline-block;
}
</style>
