<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00305B, calcu01344B, calcu01532B, calcu00001B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00305B(seed) - calcu01344B(seed) + calcu01532B(seed) - calcu00001B(seed));
</script>

<template>
  <div class="blk">comp01078: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(19 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(199 50% 50%);
  display: inline-block;
}
</style>
