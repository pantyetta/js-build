<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00338A, calcu00741A, calcu00516A, calcu00760A, calcu00684A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00338A(seed) - calcu00741A(seed) + calcu00516A(seed) - calcu00760A(seed) + calcu00684A(seed));
</script>

<template>
  <div class="blk">comp00884: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(179 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(359 50% 50%);
  display: inline-block;
}
</style>
