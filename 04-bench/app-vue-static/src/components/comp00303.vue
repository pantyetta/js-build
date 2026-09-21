<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00049A, calcu00224B, calcu01471A, calcu00637B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00049A(seed) - calcu00224B(seed) + calcu01471A(seed) - calcu00637B(seed));
</script>

<template>
  <div class="blk">comp00303: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
