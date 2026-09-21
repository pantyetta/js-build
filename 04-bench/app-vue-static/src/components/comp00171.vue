<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00646A, calcu00199B, calcu00373A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00646A(seed) - calcu00199B(seed) + calcu00373A(seed));
</script>

<template>
  <div class="blk">comp00171: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(334 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(154 50% 50%);
  display: inline-block;
}
</style>
