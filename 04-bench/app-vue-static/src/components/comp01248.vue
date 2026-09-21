<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00592A, calcu00758A, calcu00556B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00592A(seed) - calcu00758A(seed) + calcu00556B(seed));
</script>

<template>
  <div class="blk">comp01248: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(206 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(26 50% 50%);
  display: inline-block;
}
</style>
