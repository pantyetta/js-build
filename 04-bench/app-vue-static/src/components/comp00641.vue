<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00688B, calcu00922B, calcu00909B, calcu00003B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00688B(seed) - calcu00922B(seed) + calcu00909B(seed) - calcu00003B(seed));
</script>

<template>
  <div class="blk">comp00641: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(16 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(196 50% 50%);
  display: inline-block;
}
</style>
