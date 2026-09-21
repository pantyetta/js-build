<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01456A, calcu00479B, calcu00260A, calcu01162A, calcu00673A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01456A(seed) - calcu00479B(seed) + calcu00260A(seed) - calcu01162A(seed) + calcu00673A(seed));
</script>

<template>
  <div class="blk">comp00647: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
