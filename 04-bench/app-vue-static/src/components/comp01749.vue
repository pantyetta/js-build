<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01405B, calcu00987B, calcu00008B, calcu00917A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01405B(seed) - calcu00987B(seed) + calcu00008B(seed) - calcu00917A(seed));
</script>

<template>
  <div class="blk">comp01749: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>
