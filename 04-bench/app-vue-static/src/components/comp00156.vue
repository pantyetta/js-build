<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01097A, calcu01064B, calcu00231B, calcu01390B, calcu00760B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01097A(seed) - calcu01064B(seed) + calcu00231B(seed) - calcu01390B(seed) + calcu00760B(seed));
</script>

<template>
  <div class="blk">comp00156: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(229 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(49 50% 50%);
  display: inline-block;
}
</style>
