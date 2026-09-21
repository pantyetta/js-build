<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01212A, calcu01512A, calcu00507A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01212A(seed) - calcu01512A(seed) + calcu00507A(seed));
</script>

<template>
  <div class="blk">comp00643: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(81 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(261 50% 50%);
  display: inline-block;
}
</style>
