<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00945B, calcu00031B, calcu00995A, calcu00613A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00945B(seed) - calcu00031B(seed) + calcu00995A(seed) - calcu00613A(seed));
</script>

<template>
  <div class="blk">comp00360: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(223 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(43 50% 50%);
  display: inline-block;
}
</style>
