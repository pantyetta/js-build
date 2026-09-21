<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00176B, calcu00812B, calcu00781B, calcu00732A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00176B(seed) - calcu00812B(seed) + calcu00781B(seed) - calcu00732A(seed));
</script>

<template>
  <div class="blk">comp01645: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
