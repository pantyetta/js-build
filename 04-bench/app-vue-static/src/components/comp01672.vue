<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00175B, calcu00701A, calcu00445B, calcu00496B, calcu00577A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00175B(seed) - calcu00701A(seed) + calcu00445B(seed) - calcu00496B(seed) + calcu00577A(seed));
</script>

<template>
  <div class="blk">comp01672: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(206 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(26 50% 50%);
  display: inline-block;
}
</style>
