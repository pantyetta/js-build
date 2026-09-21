<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00418A, calcu01341A, calcu00357B, calcu00397B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00418A(seed) - calcu01341A(seed) + calcu00357B(seed) - calcu00397B(seed));
</script>

<template>
  <div class="blk">comp01205: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>
