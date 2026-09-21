<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00416A, calcu00058A, calcu00075B, calcu00718A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00416A(seed) - calcu00058A(seed) + calcu00075B(seed) - calcu00718A(seed));
</script>

<template>
  <div class="blk">comp01017: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(44 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(224 50% 50%);
  display: inline-block;
}
</style>
