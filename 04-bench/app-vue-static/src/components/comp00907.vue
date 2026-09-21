<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00945B, calcu00164A, calcu00918A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00945B(seed) - calcu00164A(seed) + calcu00918A(seed));
</script>

<template>
  <div class="blk">comp00907: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>
