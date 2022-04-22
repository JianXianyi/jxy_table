<template>
  <BasicModal
    v-bind="$attrs"
    destroyOnClose
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    @visible-change="handleShow"
    width="900px"
  >
    <template v-if="!loading">
      <About />
    </template>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import About from '/@/views/sys/about/index.vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  // const About = () => import('/@/views/sys/about/index.vue');

  export default defineComponent({
    components: { BasicModal, About },
    setup() {
      const loading = ref(true);
      const lines = ref(10);
      const [register, { setModalProps, redoModalHeight }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        },
      );

      function handleShow(visible: boolean) {
        if (visible) {
          loading.value = true;
          setModalProps({ loading: true, confirmLoading: true });
          setTimeout(() => {
            lines.value = Math.round(Math.random() * 30 + 5);
            loading.value = false;
            setModalProps({ loading: false, confirmLoading: false });
          }, 3000);
        }
      }

      function setLines() {
        lines.value = Math.round(Math.random() * 20 + 10);
      }
      return { register, loading, handleShow, lines, setLines };
    },
  });
</script>
<style scoped>
  .empty-tips {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
