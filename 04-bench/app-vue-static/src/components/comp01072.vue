<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00162B, calcu01528A, calcu00857A, calcu01589B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00162B(seed) - calcu01528A(seed) + calcu00857A(seed) - calcu01589B(seed));
</script>

<template>
  <div class="blk">comp01072: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(289 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(109 50% 50%);
  display: inline-block;
}
</style>
