<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00569A, calcu01038A, calcu00250A, calcu01185A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00569A(seed) - calcu01038A(seed) + calcu00250A(seed) - calcu01185A(seed));
</script>

<template>
  <div class="blk">comp00515: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(11 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(191 50% 50%);
  display: inline-block;
}
</style>
