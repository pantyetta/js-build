<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01087B, calcu01301A, calcu01364B, calcu00770A, calcu01388A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01087B(seed) - calcu01301A(seed) + calcu01364B(seed) - calcu00770A(seed) + calcu01388A(seed));
</script>

<template>
  <div class="blk">comp00256: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(269 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(89 50% 50%);
  display: inline-block;
}
</style>
