<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01294A, calcu00029B, calcu00751A, calcu01281B, calcu00807B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01294A(seed) - calcu00029B(seed) + calcu00751A(seed) - calcu01281B(seed) + calcu00807B(seed));
</script>

<template>
  <div class="blk">comp00994: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(101 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(281 50% 50%);
  display: inline-block;
}
</style>
