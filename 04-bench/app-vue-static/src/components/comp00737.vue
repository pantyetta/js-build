<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00625B, calcu00549B, calcu00597A, calcu00243A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00625B(seed) - calcu00549B(seed) + calcu00597A(seed) - calcu00243A(seed));
</script>

<template>
  <div class="blk">comp00737: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(182 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(2 50% 50%);
  display: inline-block;
}
</style>
