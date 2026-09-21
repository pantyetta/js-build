<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00531A, calcu00619B, calcu00361B, calcu00232B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00531A(seed) - calcu00619B(seed) + calcu00361B(seed) - calcu00232B(seed));
</script>

<template>
  <div class="blk">comp00224: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(217 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(37 50% 50%);
  display: inline-block;
}
</style>
