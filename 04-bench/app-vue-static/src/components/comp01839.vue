<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01059A, calcu01297B, calcu00139A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01059A(seed) - calcu01297B(seed) + calcu00139A(seed));
</script>

<template>
  <div class="blk">comp01839: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
