<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00932B, calcu01310B, calcu01332A, calcu00625B, calcu01162B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00932B(seed) - calcu01310B(seed) + calcu01332A(seed) - calcu00625B(seed) + calcu01162B(seed));
</script>

<template>
  <div class="blk">comp00958: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(248 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(68 50% 50%);
  display: inline-block;
}
</style>
