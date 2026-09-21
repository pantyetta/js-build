<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00431A, calcu00603A, calcu01244B, calcu00949A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00431A(seed) - calcu00603A(seed) + calcu01244B(seed) - calcu00949A(seed));
</script>

<template>
  <div class="blk">comp00509: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(160 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(340 50% 50%);
  display: inline-block;
}
</style>
