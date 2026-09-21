<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00466B, calcu01446A, calcu00947A, calcu00999B, calcu01161B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00466B(seed) - calcu01446A(seed) + calcu00947A(seed) - calcu00999B(seed) + calcu01161B(seed));
</script>

<template>
  <div class="blk">comp00341: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(127 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(307 50% 50%);
  display: inline-block;
}
</style>
