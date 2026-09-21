<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00394B, calcu01448B, calcu01111A, calcu00713B, calcu00472B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00394B(seed) - calcu01448B(seed) + calcu01111A(seed) - calcu00713B(seed) + calcu00472B(seed));
</script>

<template>
  <div class="blk">comp01075: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
