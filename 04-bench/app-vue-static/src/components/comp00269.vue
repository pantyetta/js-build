<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00154A, calcu01131A, calcu00197B, calcu01057B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00154A(seed) - calcu01131A(seed) + calcu00197B(seed) - calcu01057B(seed));
</script>

<template>
  <div class="blk">comp00269: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(279 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(99 50% 50%);
  display: inline-block;
}
</style>
