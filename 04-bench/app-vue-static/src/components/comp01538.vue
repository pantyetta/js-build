<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00979B, calcu01301B, calcu01288B, calcu01066A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00979B(seed) - calcu01301B(seed) + calcu01288B(seed) - calcu01066A(seed));
</script>

<template>
  <div class="blk">comp01538: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(344 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(164 50% 50%);
  display: inline-block;
}
</style>
