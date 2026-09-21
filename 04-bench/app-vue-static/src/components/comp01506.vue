<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00733B, calcu00443A, calcu01595B, calcu01350A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00733B(seed) - calcu00443A(seed) + calcu01595B(seed) - calcu01350A(seed));
</script>

<template>
  <div class="blk">comp01506: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>
