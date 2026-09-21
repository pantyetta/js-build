<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00603B, calcu00806A, calcu01118A, calcu00527A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00603B(seed) - calcu00806A(seed) + calcu01118A(seed) - calcu00527A(seed));
</script>

<template>
  <div class="blk">comp00217: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(251 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(71 50% 50%);
  display: inline-block;
}
</style>
