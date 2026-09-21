<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01128B, calcu00747B, calcu01236A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01128B(seed) - calcu00747B(seed) + calcu01236A(seed));
</script>

<template>
  <div class="blk">comp00580: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(313 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(133 50% 50%);
  display: inline-block;
}
</style>
