<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00992B, calcu00461B, calcu01452B, calcu00517A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00992B(seed) - calcu00461B(seed) + calcu01452B(seed) - calcu00517A(seed));
</script>

<template>
  <div class="blk">comp01630: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>
