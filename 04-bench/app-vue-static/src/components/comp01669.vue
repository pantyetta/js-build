<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00003B, calcu01407B, calcu00376B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00003B(seed) - calcu01407B(seed) + calcu00376B(seed));
</script>

<template>
  <div class="blk">comp01669: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>
