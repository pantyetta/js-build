<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00242B, calcu00387A, calcu00810A, calcu00744A, calcu01386B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00242B(seed) - calcu00387A(seed) + calcu00810A(seed) - calcu00744A(seed) + calcu01386B(seed));
</script>

<template>
  <div class="blk">comp00589: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(268 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(88 50% 50%);
  display: inline-block;
}
</style>
