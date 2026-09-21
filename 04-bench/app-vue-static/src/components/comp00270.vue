<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01475A, calcu00107B, calcu00711A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01475A(seed) - calcu00107B(seed) + calcu00711A(seed));
</script>

<template>
  <div class="blk">comp00270: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(1 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(181 50% 50%);
  display: inline-block;
}
</style>
