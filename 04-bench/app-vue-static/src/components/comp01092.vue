<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01471B, calcu00300A, calcu01508A, calcu01062B, calcu00258A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01471B(seed) - calcu00300A(seed) + calcu01508A(seed) - calcu01062B(seed) + calcu00258A(seed));
</script>

<template>
  <div class="blk">comp01092: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(34 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(214 50% 50%);
  display: inline-block;
}
</style>
