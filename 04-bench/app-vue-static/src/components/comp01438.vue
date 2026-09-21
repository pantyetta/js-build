<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01178B, calcu00705A, calcu00592B, calcu01086B, calcu00929A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01178B(seed) - calcu00705A(seed) + calcu00592B(seed) - calcu01086B(seed) + calcu00929A(seed));
</script>

<template>
  <div class="blk">comp01438: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
