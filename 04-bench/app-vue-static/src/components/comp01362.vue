<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01218A, calcu01379A, calcu00901B, calcu01524A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01218A(seed) - calcu01379A(seed) + calcu00901B(seed) - calcu01524A(seed));
</script>

<template>
  <div class="blk">comp01362: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(84 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(264 50% 50%);
  display: inline-block;
}
</style>
