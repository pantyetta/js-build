<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00731B, calcu01478A, calcu00460A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00731B(seed) - calcu01478A(seed) + calcu00460A(seed));
</script>

<template>
  <div class="blk">comp00049: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(157 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(337 50% 50%);
  display: inline-block;
}
</style>
