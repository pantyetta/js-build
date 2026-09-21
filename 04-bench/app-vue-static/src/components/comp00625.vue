<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01387A, calcu01290B, calcu00988A, calcu01211A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01387A(seed) - calcu01290B(seed) + calcu00988A(seed) - calcu01211A(seed));
</script>

<template>
  <div class="blk">comp00625: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(21 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(201 50% 50%);
  display: inline-block;
}
</style>
