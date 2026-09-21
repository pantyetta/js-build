<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01393A, calcu00226A, calcu00413B, calcu00321B, calcu00818A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01393A(seed) - calcu00226A(seed) + calcu00413B(seed) - calcu00321B(seed) + calcu00818A(seed));
</script>

<template>
  <div class="blk">comp01527: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
