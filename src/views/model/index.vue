<template>
  <PageWrapper>
    <a-button type="primary" class="my-4" @click="openModal1"> 打开弹窗 </a-button>
    <Modal @register="register" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, shallowRef, ComponentOptions, ref, nextTick } from 'vue';
  import { useModal } from '/@/components/Modal';
  import Modal from '/@/views/model/component/ModelBox.vue';
  import { PageWrapper } from '/@/components/Page';
  export default defineComponent({
    components: { Modal, PageWrapper },
    setup() {
      const currentModal = shallowRef<Nullable<ComponentOptions>>(null);
      const [register, { openModal: openModal1 }] = useModal();
      const modalVisible = ref<Boolean>(false);
      const userData = ref<any>(null);

      function openModalLoading() {
        openModal1(true);
        // setModalProps({ loading: true });
        // setTimeout(() => {
        //   setModalProps({ loading: false });
        // }, 2000);
      }

      function openTargetModal(index) {
        switch (index) {
          case 1:
            currentModal.value = Modal;
            break;
        }
        nextTick(() => {
          // `useModal` not working with dynamic component
          // passing data through `userData` prop
          // userData.value = { data: Math.random(), info: 'Info222' };
          // open the target modal
          modalVisible.value = true;
        });
      }

      return {
        register,
        openModal1,
        modalVisible,
        userData,
        openTargetModal,
        currentModal,
        openModalLoading,
      };
    },
  });
</script>
