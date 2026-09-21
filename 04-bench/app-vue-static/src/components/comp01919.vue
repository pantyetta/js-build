<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00837B, calcu00402A, calcu00455A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00837B(seed) - calcu00402A(seed) + calcu00455A(seed));
</script>

<template>
  <div class="blk">comp01919: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(204 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(24 50% 50%);
  display: inline-block;
}
</style>
