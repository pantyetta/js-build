<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00080A, calcu00715B, calcu01016A, calcu00322A, calcu00825A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00080A(seed) - calcu00715B(seed) + calcu01016A(seed) - calcu00322A(seed) + calcu00825A(seed));
</script>

<template>
  <div class="blk">comp00081: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(332 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(152 50% 50%);
  display: inline-block;
}
</style>
