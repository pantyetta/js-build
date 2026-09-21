<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00780B, calcu00778B, calcu00705A, calcu00842B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00780B(seed) - calcu00778B(seed) + calcu00705A(seed) - calcu00842B(seed));
</script>

<template>
  <div class="blk">comp01865: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(327 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(147 50% 50%);
  display: inline-block;
}
</style>
