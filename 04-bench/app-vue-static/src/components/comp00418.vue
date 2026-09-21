<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01071B, calcu01128B, calcu00090B, calcu00798A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01071B(seed) - calcu01128B(seed) + calcu00090B(seed) - calcu00798A(seed));
</script>

<template>
  <div class="blk">comp00418: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
