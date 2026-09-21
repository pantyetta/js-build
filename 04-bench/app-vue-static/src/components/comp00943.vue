<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00731B, calcu00558A, calcu00229B, calcu00777A, calcu00090B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00731B(seed) - calcu00558A(seed) + calcu00229B(seed) - calcu00777A(seed) + calcu00090B(seed));
</script>

<template>
  <div class="blk">comp00943: {{ total }}</div>
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
