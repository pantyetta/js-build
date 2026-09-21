<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00723A, calcu00436A, calcu00195B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00723A(seed) - calcu00436A(seed) + calcu00195B(seed));
</script>

<template>
  <div class="blk">comp00319: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(284 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(104 50% 50%);
  display: inline-block;
}
</style>
