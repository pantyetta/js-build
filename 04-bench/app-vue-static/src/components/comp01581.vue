<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00489A, calcu00457B, calcu01190B, calcu01436B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00489A(seed) - calcu00457B(seed) + calcu01190B(seed) - calcu01436B(seed));
</script>

<template>
  <div class="blk">comp01581: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
