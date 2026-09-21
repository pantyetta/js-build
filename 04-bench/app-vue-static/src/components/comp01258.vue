<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00927B, calcu01505B, calcu00493B, calcu01203B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00927B(seed) - calcu01505B(seed) + calcu00493B(seed) - calcu01203B(seed));
</script>

<template>
  <div class="blk">comp01258: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(306 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(126 50% 50%);
  display: inline-block;
}
</style>
