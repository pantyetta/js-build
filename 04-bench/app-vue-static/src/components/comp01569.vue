<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01563B, calcu00635B, calcu00516B, calcu01354B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01563B(seed) - calcu00635B(seed) + calcu00516B(seed) - calcu01354B(seed));
</script>

<template>
  <div class="blk">comp01569: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>
