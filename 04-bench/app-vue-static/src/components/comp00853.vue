<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00858B, calcu01437A, calcu00340A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00858B(seed) - calcu01437A(seed) + calcu00340A(seed));
</script>

<template>
  <div class="blk">comp00853: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
