<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00603A, calcu00936A, calcu01414A, calcu00158B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00603A(seed) - calcu00936A(seed) + calcu01414A(seed) - calcu00158B(seed));
</script>

<template>
  <div class="blk">comp01559: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>
