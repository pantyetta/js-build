<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01340B, calcu00027B, calcu00561A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01340B(seed) - calcu00027B(seed) + calcu00561A(seed));
</script>

<template>
  <div class="blk">comp00376: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(333 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(153 50% 50%);
  display: inline-block;
}
</style>
