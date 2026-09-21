<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00007B, calcu00046B, calcu00884A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00007B(seed) - calcu00046B(seed) + calcu00884A(seed));
</script>

<template>
  <div class="blk">comp00056: {{ total }}</div>
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
