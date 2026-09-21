<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00789A, calcu00351A, calcu00381B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00789A(seed) - calcu00351A(seed) + calcu00381B(seed));
</script>

<template>
  <div class="blk">comp01658: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(358 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(178 50% 50%);
  display: inline-block;
}
</style>
