<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01540B, calcu01495B, calcu01105B, calcu00183B, calcu00118B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01540B(seed) - calcu01495B(seed) + calcu01105B(seed) - calcu00183B(seed) + calcu00118B(seed));
</script>

<template>
  <div class="blk">comp01352: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
