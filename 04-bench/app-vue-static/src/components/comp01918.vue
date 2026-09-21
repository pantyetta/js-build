<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00697B, calcu01341A, calcu00875B, calcu01131A, calcu01077B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00697B(seed) - calcu01341A(seed) + calcu00875B(seed) - calcu01131A(seed) + calcu01077B(seed));
</script>

<template>
  <div class="blk">comp01918: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>
