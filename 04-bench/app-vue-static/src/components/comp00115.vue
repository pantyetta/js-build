<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01042A, calcu00873B, calcu00902A, calcu00331B, calcu01319A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01042A(seed) - calcu00873B(seed) + calcu00902A(seed) - calcu00331B(seed) + calcu01319A(seed));
</script>

<template>
  <div class="blk">comp00115: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(48 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(228 50% 50%);
  display: inline-block;
}
</style>
