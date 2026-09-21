<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00767A, calcu00475A, calcu00412B, calcu00433B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00767A(seed) - calcu00475A(seed) + calcu00412B(seed) - calcu00433B(seed));
</script>

<template>
  <div class="blk">comp00684: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>
