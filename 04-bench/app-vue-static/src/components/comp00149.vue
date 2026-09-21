<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01084A, calcu00694A, calcu01596B, calcu00616B, calcu00177B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01084A(seed) - calcu00694A(seed) + calcu01596B(seed) - calcu00616B(seed) + calcu00177B(seed));
</script>

<template>
  <div class="blk">comp00149: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
