<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01579A, calcu01171A, calcu00511A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01579A(seed) - calcu01171A(seed) + calcu00511A(seed));
</script>

<template>
  <div class="blk">comp01136: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
