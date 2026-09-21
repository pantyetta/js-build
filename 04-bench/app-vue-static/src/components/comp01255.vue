<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00307B, calcu00840B, calcu00562B, calcu01170B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00307B(seed) - calcu00840B(seed) + calcu00562B(seed) - calcu01170B(seed));
</script>

<template>
  <div class="blk">comp01255: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>
