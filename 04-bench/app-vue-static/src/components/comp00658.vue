<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00917A, calcu00385B, calcu00404A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00917A(seed) - calcu00385B(seed) + calcu00404A(seed));
</script>

<template>
  <div class="blk">comp00658: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
