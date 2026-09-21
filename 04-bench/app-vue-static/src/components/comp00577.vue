<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00075A, calcu00179A, calcu00602B, calcu00752B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00075A(seed) - calcu00179A(seed) + calcu00602B(seed) - calcu00752B(seed));
</script>

<template>
  <div class="blk">comp00577: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(174 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(354 50% 50%);
  display: inline-block;
}
</style>
