<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00345A, calcu00872B, calcu00127B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00345A(seed) - calcu00872B(seed) + calcu00127B(seed));
</script>

<template>
  <div class="blk">comp00583: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>
