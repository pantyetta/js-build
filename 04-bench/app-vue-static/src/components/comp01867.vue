<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00054B, calcu00224B, calcu00464B, calcu00357B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00054B(seed) - calcu00224B(seed) + calcu00464B(seed) - calcu00357B(seed));
</script>

<template>
  <div class="blk">comp01867: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>
