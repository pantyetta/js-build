<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01229B, calcu01341B, calcu00950B, calcu00495A, calcu00714A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01229B(seed) - calcu01341B(seed) + calcu00950B(seed) - calcu00495A(seed) + calcu00714A(seed));
</script>

<template>
  <div class="blk">comp01565: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
