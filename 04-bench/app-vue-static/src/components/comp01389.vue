<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00959B, calcu01056B, calcu00575B, calcu00745B, calcu00656A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00959B(seed) - calcu01056B(seed) + calcu00575B(seed) - calcu00745B(seed) + calcu00656A(seed));
</script>

<template>
  <div class="blk">comp01389: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(39 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(219 50% 50%);
  display: inline-block;
}
</style>
