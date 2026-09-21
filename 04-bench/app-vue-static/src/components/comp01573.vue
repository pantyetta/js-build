<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00253B, calcu00954B, calcu00476B, calcu00034B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00253B(seed) - calcu00954B(seed) + calcu00476B(seed) - calcu00034B(seed));
</script>

<template>
  <div class="blk">comp01573: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>
