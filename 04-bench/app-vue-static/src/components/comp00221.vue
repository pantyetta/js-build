<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00374A, calcu00203B, calcu00184A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00374A(seed) - calcu00203B(seed) + calcu00184A(seed));
</script>

<template>
  <div class="blk">comp00221: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
