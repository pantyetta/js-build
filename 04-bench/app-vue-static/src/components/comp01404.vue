<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01282A, calcu01394B, calcu01011B, calcu01558B, calcu00015A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01282A(seed) - calcu01394B(seed) + calcu01011B(seed) - calcu01558B(seed) + calcu00015A(seed));
</script>

<template>
  <div class="blk">comp01404: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>
