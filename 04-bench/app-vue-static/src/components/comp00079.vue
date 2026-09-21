<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00954B, calcu00105B, calcu00842A, calcu00611B, calcu00065A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00954B(seed) - calcu00105B(seed) + calcu00842A(seed) - calcu00611B(seed) + calcu00065A(seed));
</script>

<template>
  <div class="blk">comp00079: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>
