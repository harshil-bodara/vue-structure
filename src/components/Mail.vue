<template>
  <div class="inbox__detail">
      <div class="inbox__detail__container" @click="changeStatus">
        <input type="checkbox" id="mail.text" :checked="mail.status" @change="changeStatus" />
        <span class="inbox__detail--checkmark"></span>
      </div>
      <label   @click="Show">{{ mail?.text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    mail: Object,
  },
  data: function () {
    return {};
  },
  methods:{
   Show()
    {
      this.$emit('showMail');
    },
    changeStatus(event){
      this.$emit('changeStatus');
    },
  }
};
</script>

<style scoped>
.inbox__detail {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px 10px;
  cursor: pointer;
  background-color: #f7f7f7;
  margin-top: 15px;
}
.inbox__detail label {
  font-size: 14px;
  margin-left:30px;
}
/* checkbox */
.inbox__detail__container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}
.inbox__detail__container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.inbox__detail--checkmark {
  position: absolute;
  top: -3px;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #ccc;
  border-radius: 4px;
}
.inbox__detail__container input:checked ~ .inbox__detail--checkmark {
  background-color: #48acfb;
}
.inbox__detail--checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.inbox__detail__container input:checked ~ .inbox__detail--checkmark:after {
  display: block;
}
.inbox__detail__container .inbox__detail--checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
