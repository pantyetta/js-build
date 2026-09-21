<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01524B, calcu01495A, calcu01082A, calcu01310B, calcu00798A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01524B(seed) - calcu01495A(seed) + calcu01082A(seed) - calcu01310B(seed) + calcu00798A(seed));
</script>

<template>
  <div class="blk">comp00147: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
