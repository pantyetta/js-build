<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00967A, calcu01298B, calcu00446A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00967A(seed) - calcu01298B(seed) + calcu00446A(seed));
</script>

<template>
  <div class="blk">comp00384: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(314 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(134 50% 50%);
  display: inline-block;
}
</style>
