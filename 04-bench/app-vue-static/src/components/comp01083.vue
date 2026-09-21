<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00115B, calcu01279A, calcu00662B, calcu01098A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00115B(seed) - calcu01279A(seed) + calcu00662B(seed) - calcu01098A(seed));
</script>

<template>
  <div class="blk">comp01083: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(69 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(249 50% 50%);
  display: inline-block;
}
</style>
