<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01144A, calcu00158B, calcu01548B, calcu01439B, calcu00719A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01144A(seed) - calcu00158B(seed) + calcu01548B(seed) - calcu01439B(seed) + calcu00719A(seed));
</script>

<template>
  <div class="blk">comp00317: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>
