<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01481B, calcu00493B, calcu00007B, calcu01237B, calcu01210B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01481B(seed) - calcu00493B(seed) + calcu00007B(seed) - calcu01237B(seed) + calcu01210B(seed));
</script>

<template>
  <div class="blk">comp01013: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(156 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(336 50% 50%);
  display: inline-block;
}
</style>
