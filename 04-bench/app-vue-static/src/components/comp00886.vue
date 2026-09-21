<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00583B, calcu00627B, calcu00152A, calcu01183B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00583B(seed) - calcu00627B(seed) + calcu00152A(seed) - calcu01183B(seed));
</script>

<template>
  <div class="blk">comp00886: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
