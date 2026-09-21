<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00332A, calcu00402B, calcu00081B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00332A(seed) - calcu00402B(seed) + calcu00081B(seed));
</script>

<template>
  <div class="blk">comp01674: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(27 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(207 50% 50%);
  display: inline-block;
}
</style>
