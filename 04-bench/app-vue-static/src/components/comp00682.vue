<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00703A, calcu00725B, calcu01583B, calcu00596A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00703A(seed) - calcu00725B(seed) + calcu01583B(seed) - calcu00596A(seed));
</script>

<template>
  <div class="blk">comp00682: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(293 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(113 50% 50%);
  display: inline-block;
}
</style>
