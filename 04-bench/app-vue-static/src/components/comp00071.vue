<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00932B, calcu00899B, calcu00839B, calcu00181A, calcu01016A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00932B(seed) - calcu00899B(seed) + calcu00839B(seed) - calcu00181A(seed) + calcu01016A(seed));
</script>

<template>
  <div class="blk">comp00071: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
