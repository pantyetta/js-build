<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00823B, calcu01282A, calcu01117B, calcu00166B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00823B(seed) - calcu01282A(seed) + calcu01117B(seed) - calcu00166B(seed));
</script>

<template>
  <div class="blk">comp01635: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
