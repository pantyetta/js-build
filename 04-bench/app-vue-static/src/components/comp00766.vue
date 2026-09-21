<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01206B, calcu00653B, calcu01293B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01206B(seed) - calcu00653B(seed) + calcu01293B(seed));
</script>

<template>
  <div class="blk">comp00766: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
