<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00370B, calcu00680B, calcu01399A, calcu01147B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00370B(seed) - calcu00680B(seed) + calcu01399A(seed) - calcu01147B(seed));
</script>

<template>
  <div class="blk">comp01696: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
