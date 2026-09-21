<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00155A, calcu01052B, calcu00403A, calcu00646A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00155A(seed) - calcu01052B(seed) + calcu00403A(seed) - calcu00646A(seed));
</script>

<template>
  <div class="blk">comp00784: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>
