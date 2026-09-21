<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01160A, calcu00104A, calcu00460A, calcu01093A, calcu00581A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01160A(seed) - calcu00104A(seed) + calcu00460A(seed) - calcu01093A(seed) + calcu00581A(seed));
</script>

<template>
  <div class="blk">comp01224: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(50 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(230 50% 50%);
  display: inline-block;
}
</style>
