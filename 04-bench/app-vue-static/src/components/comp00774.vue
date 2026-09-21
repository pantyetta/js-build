<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01344B, calcu00188B, calcu00052A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01344B(seed) - calcu00188B(seed) + calcu00052A(seed));
</script>

<template>
  <div class="blk">comp00774: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(35 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(215 50% 50%);
  display: inline-block;
}
</style>
