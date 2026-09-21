<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00618B, calcu00159B, calcu01144B, calcu01362B, calcu00362B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00618B(seed) - calcu00159B(seed) + calcu01144B(seed) - calcu01362B(seed) + calcu00362B(seed));
</script>

<template>
  <div class="blk">comp00241: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>
