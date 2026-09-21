<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00495A, calcu00702A, calcu01151B, calcu00278A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00495A(seed) - calcu00702A(seed) + calcu01151B(seed) - calcu00278A(seed));
</script>

<template>
  <div class="blk">comp01150: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
