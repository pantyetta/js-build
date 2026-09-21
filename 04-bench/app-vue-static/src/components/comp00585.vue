<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01459B, calcu00372B, calcu00807B, calcu01352A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01459B(seed) - calcu00372B(seed) + calcu00807B(seed) - calcu01352A(seed));
</script>

<template>
  <div class="blk">comp00585: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>
