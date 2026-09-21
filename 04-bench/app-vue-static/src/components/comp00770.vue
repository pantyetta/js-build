<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00752B, calcu01319A, calcu00274B, calcu00431A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00752B(seed) - calcu01319A(seed) + calcu00274B(seed) - calcu00431A(seed));
</script>

<template>
  <div class="blk">comp00770: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(128 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(308 50% 50%);
  display: inline-block;
}
</style>
