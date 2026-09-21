<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00585B, calcu01382A, calcu00971B, calcu00040B, calcu01487A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00585B(seed) - calcu01382A(seed) + calcu00971B(seed) - calcu00040B(seed) + calcu01487A(seed));
</script>

<template>
  <div class="blk">comp00603: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(172 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(352 50% 50%);
  display: inline-block;
}
</style>
