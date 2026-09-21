<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01425B, calcu00090B, calcu00045A, calcu01159B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01425B(seed) - calcu00090B(seed) + calcu00045A(seed) - calcu01159B(seed));
</script>

<template>
  <div class="blk">comp00724: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>
