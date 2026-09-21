<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01065A, calcu01552A, calcu01131A, calcu00225B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01065A(seed) - calcu01552A(seed) + calcu01131A(seed) - calcu00225B(seed));
</script>

<template>
  <div class="blk">comp00074: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(286 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(106 50% 50%);
  display: inline-block;
}
</style>
