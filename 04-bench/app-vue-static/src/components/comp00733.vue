<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00888B, calcu01004B, calcu00274B, calcu00389B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00888B(seed) - calcu01004B(seed) + calcu00274B(seed) - calcu00389B(seed));
</script>

<template>
  <div class="blk">comp00733: {{ total }}</div>
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
