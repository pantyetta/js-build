<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00813B, calcu01225B, calcu00538B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00813B(seed) - calcu01225B(seed) + calcu00538B(seed));
</script>

<template>
  <div class="blk">comp00212: {{ total }}</div>
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
