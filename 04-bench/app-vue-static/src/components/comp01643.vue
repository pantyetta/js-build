<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01456B, calcu00038A, calcu00730A, calcu00034B, calcu01244A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01456B(seed) - calcu00038A(seed) + calcu00730A(seed) - calcu00034B(seed) + calcu01244A(seed));
</script>

<template>
  <div class="blk">comp01643: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>
