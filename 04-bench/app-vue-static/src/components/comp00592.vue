<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01180A, calcu00568B, calcu00221B, calcu00823B, calcu00509A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01180A(seed) - calcu00568B(seed) + calcu00221B(seed) - calcu00823B(seed) + calcu00509A(seed));
</script>

<template>
  <div class="blk">comp00592: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>
