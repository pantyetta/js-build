<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00107B, calcu00225B, calcu00168B, calcu00831B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00107B(seed) - calcu00225B(seed) + calcu00168B(seed) - calcu00831B(seed));
</script>

<template>
  <div class="blk">comp00838: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(357 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(177 50% 50%);
  display: inline-block;
}
</style>
