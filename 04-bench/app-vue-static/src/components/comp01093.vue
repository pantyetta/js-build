<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01587B, calcu01340B, calcu00781A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01587B(seed) - calcu01340B(seed) + calcu00781A(seed));
</script>

<template>
  <div class="blk">comp01093: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>
