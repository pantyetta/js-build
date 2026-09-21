<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00998B, calcu00405B, calcu00354B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00998B(seed) - calcu00405B(seed) + calcu00354B(seed));
</script>

<template>
  <div class="blk">comp00890: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(169 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(349 50% 50%);
  display: inline-block;
}
</style>
