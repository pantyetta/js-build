<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00475A, calcu00631B, calcu01020A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00475A(seed) - calcu00631B(seed) + calcu01020A(seed));
</script>

<template>
  <div class="blk">comp00531: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
