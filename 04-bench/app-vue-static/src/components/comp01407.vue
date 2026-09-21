<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00745A, calcu01402B, calcu00418A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00745A(seed) - calcu01402B(seed) + calcu00418A(seed));
</script>

<template>
  <div class="blk">comp01407: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(282 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(102 50% 50%);
  display: inline-block;
}
</style>
