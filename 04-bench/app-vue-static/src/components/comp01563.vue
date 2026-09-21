<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00281B, calcu00089B, calcu00282B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00281B(seed) - calcu00089B(seed) + calcu00282B(seed));
</script>

<template>
  <div class="blk">comp01563: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(67 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(247 50% 50%);
  display: inline-block;
}
</style>
