<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01406A, calcu00921B, calcu00662B, calcu00468A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01406A(seed) - calcu00921B(seed) + calcu00662B(seed) - calcu00468A(seed));
</script>

<template>
  <div class="blk">comp00266: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
