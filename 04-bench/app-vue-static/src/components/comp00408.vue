<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01277A, calcu01333A, calcu01569A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01277A(seed) - calcu01333A(seed) + calcu01569A(seed));
</script>

<template>
  <div class="blk">comp00408: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
