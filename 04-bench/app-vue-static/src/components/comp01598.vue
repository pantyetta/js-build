<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00535A, calcu00056A, calcu00552B, calcu00620A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00535A(seed) - calcu00056A(seed) + calcu00552B(seed) - calcu00620A(seed));
</script>

<template>
  <div class="blk">comp01598: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>
