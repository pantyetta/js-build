<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01042A, calcu01183B, calcu00427B, calcu00754B, calcu01101B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01042A(seed) - calcu01183B(seed) + calcu00427B(seed) - calcu00754B(seed) + calcu01101B(seed));
</script>

<template>
  <div class="blk">comp01991: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>
