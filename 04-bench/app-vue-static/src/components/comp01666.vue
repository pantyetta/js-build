<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01505B, calcu00798B, calcu01520A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01505B(seed) - calcu00798B(seed) + calcu01520A(seed));
</script>

<template>
  <div class="blk">comp01666: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>
