<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00476B, calcu00385B, calcu01196A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00476B(seed) - calcu00385B(seed) + calcu01196A(seed));
</script>

<template>
  <div class="blk">comp01486: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(24 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(204 50% 50%);
  display: inline-block;
}
</style>
