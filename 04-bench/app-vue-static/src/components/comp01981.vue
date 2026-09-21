<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01431B, calcu00491B, calcu00140A, calcu01318B, calcu00778B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01431B(seed) - calcu00491B(seed) + calcu00140A(seed) - calcu01318B(seed) + calcu00778B(seed));
</script>

<template>
  <div class="blk">comp01981: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(210 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(30 50% 50%);
  display: inline-block;
}
</style>
