<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00734B, calcu01376A, calcu00895A, calcu00808B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00734B(seed) - calcu01376A(seed) + calcu00895A(seed) - calcu00808B(seed));
</script>

<template>
  <div class="blk">comp00165: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(289 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(109 50% 50%);
  display: inline-block;
}
</style>
