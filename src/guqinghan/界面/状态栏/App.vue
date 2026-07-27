<template>
  <div class="status-card">
    <header class="card-header">
      <i class="fa-solid fa-crown header-icon"></i>
      <span class="header-title">顾清寒</span>
      <span class="header-tag">当前状态</span>
    </header>

    <BodySection />

    <ClothSection />

    <EmotionSection />
  </div>
</template>

<script setup lang="ts">
import BodySection from './components/BodySection.vue';
import ClothSection from './components/ClothSection.vue';
import EmotionSection from './components/EmotionSection.vue';
</script>

<style lang="scss" scoped>
.status-card {
  width: 100%;
  max-width: 680px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.45;
  margin: 8px auto;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border);

  .header-icon {
    color: var(--c-primary);
    font-size: 14px;
  }

  .header-title {
    font-weight: 600;
    font-size: 14px;
    color: var(--c-primary);
  }

  .header-tag {
    margin-left: auto;
    font-size: 11px;
    color: var(--c-text-muted);
    letter-spacing: 0.5px;
  }
}
</style>
