<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01315B, calcu01196B, calcu00745B, calcu01351A, calcu01551A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01315B(seed) - calcu01196B(seed) + calcu00745B(seed) - calcu01351A(seed) + calcu01551A(seed));
</script>

<template>
  <div class="blk">comp00062: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(201 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(21 50% 50%);
  display: inline-block;
}
</style>
