<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00310B, calcu01158B, calcu00555B, calcu00110B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00310B(seed) - calcu01158B(seed) + calcu00555B(seed) - calcu00110B(seed));
</script>

<template>
  <div class="blk">comp01386: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>
