<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01117B, calcu01264B, calcu01377B, calcu01596B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01117B(seed) - calcu01264B(seed) + calcu01377B(seed) - calcu01596B(seed));
</script>

<template>
  <div class="blk">comp01334: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
