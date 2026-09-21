<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00282B, calcu00278B, calcu00640A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00282B(seed) - calcu00278B(seed) + calcu00640A(seed));
</script>

<template>
  <div class="blk">comp01052: {{ total }}</div>
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
