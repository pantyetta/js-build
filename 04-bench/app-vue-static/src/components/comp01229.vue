<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00743B, calcu00295A, calcu00892A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00743B(seed) - calcu00295A(seed) + calcu00892A(seed));
</script>

<template>
  <div class="blk">comp01229: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(258 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(78 50% 50%);
  display: inline-block;
}
</style>
