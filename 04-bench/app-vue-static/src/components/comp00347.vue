<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00880B, calcu00834B, calcu01342B, calcu01459B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00880B(seed) - calcu00834B(seed) + calcu01342B(seed) - calcu01459B(seed));
</script>

<template>
  <div class="blk">comp00347: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(259 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(79 50% 50%);
  display: inline-block;
}
</style>
