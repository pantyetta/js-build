<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01458A, calcu01141B, calcu00574A, calcu00378A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01458A(seed) - calcu01141B(seed) + calcu00574A(seed) - calcu00378A(seed));
</script>

<template>
  <div class="blk">comp00802: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
