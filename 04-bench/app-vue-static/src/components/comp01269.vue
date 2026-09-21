<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00194B, calcu00490B, calcu01356B, calcu00102B, calcu00530B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00194B(seed) - calcu00490B(seed) + calcu01356B(seed) - calcu00102B(seed) + calcu00530B(seed));
</script>

<template>
  <div class="blk">comp01269: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
