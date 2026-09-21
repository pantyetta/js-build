<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00865B, calcu01454B, calcu01146B, calcu01287B, calcu00047B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00865B(seed) - calcu01454B(seed) + calcu01146B(seed) - calcu01287B(seed) + calcu00047B(seed));
</script>

<template>
  <div class="blk">comp00722: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(308 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(128 50% 50%);
  display: inline-block;
}
</style>
