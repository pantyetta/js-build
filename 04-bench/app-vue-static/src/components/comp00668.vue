<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01323A, calcu01132B, calcu01379A, calcu00551B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01323A(seed) - calcu01132B(seed) + calcu01379A(seed) - calcu00551B(seed));
</script>

<template>
  <div class="blk">comp00668: {{ total }}</div>
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
