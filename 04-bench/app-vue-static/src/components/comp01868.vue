<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01397B, calcu00501B, calcu00537B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01397B(seed) - calcu00501B(seed) + calcu00537B(seed));
</script>

<template>
  <div class="blk">comp01868: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(176 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(356 50% 50%);
  display: inline-block;
}
</style>
