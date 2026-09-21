<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00696B, calcu00075B, calcu00934A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00696B(seed) - calcu00075B(seed) + calcu00934A(seed));
</script>

<template>
  <div class="blk">comp01742: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>
