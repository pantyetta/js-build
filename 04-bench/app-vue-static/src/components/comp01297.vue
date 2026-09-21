<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01063B, calcu01498B, calcu00341B, calcu00782A, calcu01227B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01063B(seed) - calcu01498B(seed) + calcu00341B(seed) - calcu00782A(seed) + calcu01227B(seed));
</script>

<template>
  <div class="blk">comp01297: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(142 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(322 50% 50%);
  display: inline-block;
}
</style>
