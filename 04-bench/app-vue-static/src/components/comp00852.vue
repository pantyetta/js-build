<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00937B, calcu00789B, calcu01169A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00937B(seed) - calcu00789B(seed) + calcu01169A(seed));
</script>

<template>
  <div class="blk">comp00852: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(50 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(230 50% 50%);
  display: inline-block;
}
</style>
