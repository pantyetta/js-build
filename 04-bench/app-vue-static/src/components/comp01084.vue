<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00026B, calcu00746A, calcu00894A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00026B(seed) - calcu00746A(seed) + calcu00894A(seed));
</script>

<template>
  <div class="blk">comp01084: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(157 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(337 50% 50%);
  display: inline-block;
}
</style>
