<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580B, calcu01000A, calcu01219B, calcu01477A, calcu00993B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00580B(seed) - calcu01000A(seed) + calcu01219B(seed) - calcu01477A(seed) + calcu00993B(seed));
</script>

<template>
  <div class="blk">comp01620: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(176 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(356 50% 50%);
  display: inline-block;
}
</style>
