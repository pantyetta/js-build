<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01027B, calcu01041B, calcu01544B, calcu00400A, calcu00815B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01027B(seed) - calcu01041B(seed) + calcu01544B(seed) - calcu00400A(seed) + calcu00815B(seed));
</script>

<template>
  <div class="blk">comp00749: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(162 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(342 50% 50%);
  display: inline-block;
}
</style>
