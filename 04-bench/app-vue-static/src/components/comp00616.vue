<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00409B, calcu00061B, calcu00992B, calcu01489B, calcu01306A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00409B(seed) - calcu00061B(seed) + calcu00992B(seed) - calcu01489B(seed) + calcu01306A(seed));
</script>

<template>
  <div class="blk">comp00616: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(301 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(121 50% 50%);
  display: inline-block;
}
</style>
