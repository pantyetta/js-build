<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01328B, calcu00908B, calcu01412B, calcu01097B, calcu00244A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01328B(seed) - calcu00908B(seed) + calcu01412B(seed) - calcu01097B(seed) + calcu00244A(seed));
</script>

<template>
  <div class="blk">comp00536: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
