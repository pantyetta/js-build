<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00833B, calcu01201A, calcu01000A, calcu00913B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00833B(seed) - calcu01201A(seed) + calcu01000A(seed) - calcu00913B(seed));
</script>

<template>
  <div class="blk">comp00050: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
