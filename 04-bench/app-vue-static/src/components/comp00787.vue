<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01409A, calcu00335B, calcu00279A, calcu00426A, calcu00076B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01409A(seed) - calcu00335B(seed) + calcu00279A(seed) - calcu00426A(seed) + calcu00076B(seed));
</script>

<template>
  <div class="blk">comp00787: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
