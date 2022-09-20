<template>
  <div class="Mailmodel" id="modal">
    <h2 @click="hidemail">Close (Esc)</h2>
    <div class="Mailmodel--button">
      <button>Mark as read (r)</button>
      <button>Archieve (a)</button>
    </div>
    <h3>{{selectedMail?.text}}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis praesentium
      tempora sint quas facere, ab repellendus quis soluta hic, unde et impedit,
      eveniet doloribus quibusdam a id? Ab, vero provident!
    </p>
  </div>
</template>

<script>
export default {
props:{
 selectedMail: Object
 },
  methods: {
    hidemail() {
      let openMailBox = document.getElementById("modal");
      openMailBox.classList.remove("modalOpen");
    },
  },
};
</script>
<style scoped>
.Mailmodel.modalOpen {
  right: 0;
  transition: right 0.5s;
}
.Mailmodel {
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  width: 500px;
  background-color: #fff;
  box-shadow: 0px 1px 10px #ddd;
  padding: 20px;
  transition: right 0.5s;
}
.Mailmodel h2 {
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
}
.Mailmodel--button {
  margin: 20px 0 10px 0;
}
.Mailmodel--button button {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 15px;
}
</style>
