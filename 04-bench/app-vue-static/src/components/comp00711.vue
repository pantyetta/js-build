<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00033A, calcu00890A, calcu00120B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00033A(seed) - calcu00890A(seed) + calcu00120B(seed));
</script>

<template>
  <div class="blk">comp00711: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
