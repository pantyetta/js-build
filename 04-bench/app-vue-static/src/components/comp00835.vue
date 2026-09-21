<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01126A, calcu00050B, calcu01271A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01126A(seed) - calcu00050B(seed) + calcu01271A(seed));
</script>

<template>
  <div class="blk">comp00835: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>
