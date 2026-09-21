<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00774B, calcu00737A, calcu01263B, calcu00838A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00774B(seed) - calcu00737A(seed) + calcu01263B(seed) - calcu00838A(seed));
</script>

<template>
  <div class="blk">comp00677: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(286 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(106 50% 50%);
  display: inline-block;
}
</style>
