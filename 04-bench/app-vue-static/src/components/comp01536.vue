<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00234A, calcu00339A, calcu00737B, calcu00500A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00234A(seed) - calcu00339A(seed) + calcu00737B(seed) - calcu00500A(seed));
</script>

<template>
  <div class="blk">comp01536: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(248 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(68 50% 50%);
  display: inline-block;
}
</style>
