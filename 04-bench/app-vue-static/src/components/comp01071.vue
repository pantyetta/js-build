<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00952A, calcu00190A, calcu00725A, calcu00783A, calcu00829A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00952A(seed) - calcu00190A(seed) + calcu00725A(seed) - calcu00783A(seed) + calcu00829A(seed));
</script>

<template>
  <div class="blk">comp01071: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(352 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(172 50% 50%);
  display: inline-block;
}
</style>
