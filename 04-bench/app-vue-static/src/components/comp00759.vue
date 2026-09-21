<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00396A, calcu00972A, calcu01027A, calcu01207A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00396A(seed) - calcu00972A(seed) + calcu01027A(seed) - calcu01207A(seed));
</script>

<template>
  <div class="blk">comp00759: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(156 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(336 50% 50%);
  display: inline-block;
}
</style>
