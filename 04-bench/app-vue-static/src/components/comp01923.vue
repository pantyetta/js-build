<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01426B, calcu00894A, calcu00773B, calcu01483B, calcu00375A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01426B(seed) - calcu00894A(seed) + calcu00773B(seed) - calcu01483B(seed) + calcu00375A(seed));
</script>

<template>
  <div class="blk">comp01923: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
