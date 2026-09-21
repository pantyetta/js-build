<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00190B, calcu00048A, calcu00354B, calcu00523B, calcu00580B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00190B(seed) - calcu00048A(seed) + calcu00354B(seed) - calcu00523B(seed) + calcu00580B(seed));
</script>

<template>
  <div class="blk">comp01260: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>
