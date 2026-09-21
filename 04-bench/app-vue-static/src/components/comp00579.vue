<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00405A, calcu00008A, calcu00592A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00405A(seed) - calcu00008A(seed) + calcu00592A(seed));
</script>

<template>
  <div class="blk">comp00579: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(342 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(162 50% 50%);
  display: inline-block;
}
</style>
