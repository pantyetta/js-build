<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00143B, calcu01224B, calcu01201A, calcu00173B, calcu01382B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00143B(seed) - calcu01224B(seed) + calcu01201A(seed) - calcu00173B(seed) + calcu01382B(seed));
</script>

<template>
  <div class="blk">comp01137: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(240 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(60 50% 50%);
  display: inline-block;
}
</style>
