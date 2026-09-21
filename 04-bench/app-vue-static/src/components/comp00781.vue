<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00474A, calcu01316B, calcu01074B, calcu01073A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00474A(seed) - calcu01316B(seed) + calcu01074B(seed) - calcu01073A(seed));
</script>

<template>
  <div class="blk">comp00781: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(119 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(299 50% 50%);
  display: inline-block;
}
</style>
