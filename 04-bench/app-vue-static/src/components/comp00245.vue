<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00705A, calcu00826B, calcu00450B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00705A(seed) - calcu00826B(seed) + calcu00450B(seed));
</script>

<template>
  <div class="blk">comp00245: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
