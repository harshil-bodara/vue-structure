<template>
  <div class="inbox">
    <h1 class="inbox--title">Inbox</h1>
    <h1>Emails selected ({{ mailLength() }})</h1>
    <div class="inbox__mark">
      <label class="inbox__detail__container">
        <input type="checkbox"  @change="selectMails($event)" />
        <span class="inbox__detail--checkmark"></span>
      </label>
      <button>Mark as read (r)</button>
      <button>Archieve (a)</button>
    </div>
    <div v-for="(mail, index) in mails" :key="index">
      <Mail
        :mail="mail"
        :key="index"
        :checked="false"
        @showMail="Showmail(mail)"
        @changeStatus="changeStatus(mail)"
      />
    </div>
    <MailModel :selectedMail="selectedMail" />
  </div>
</template>

<script>
import Mail from "../components/Mail.vue";
import MailModel from "../components/MailModel";

export default {
  watch: {},
  props: {},
  components: {
    Mail,
    MailModel,
  },
  data: function () {
    return {
      mails: [
        {
          id:1,
          status: true,
          text: "Your 7-figure plan goes bye-bye at midnight. ",
        },
        {
          id:2,
          status: true,
          text: "[WEEKEND ONLY] Get this NOW before ",
        },
        {
          id:3,
          status: false,
          text: "Uh-oh your prescription is expiring ",
        },
      ],
    };
  },
  methods: {
    mailLength() {
      return this.mails.filter((mail) => mail.status === true).length;
    },
    Showmail(checkedMail) {
      this.selectedMail = checkedMail; 
      this.mails = this.mails.map((mail) =>
        checkedMail.text == mail.text ? { ...mail, status: !mail.status } : mail
      );
      let openMailBox = document.getElementById("modal");
      openMailBox.classList.add("modalOpen");
    },
    selectMails(event){
      this.mails = this.mails.map((val) => {
      return {...val,status:event.target.checked}
     });
    },
    changeStatus(mail){
      var foundIndex = this?.mails.findIndex(x => x.id == mail.id);
      this.mails[foundIndex]['status'] = !mail.status
    }
  },
};
</script>

<style scoped>
.inbox {
  width: calc(100vw - 250px);
  padding: 3%;
}
.inbox--title {
  margin: 0;
  text-align: center;
  font-weight: 400;
}
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
}
.inbox__mark {
  margin: 30px 0 30px 10px;
  display: flex;
  align-items: center;
}
.inbox__mark .inbox__detail--checkmark {
  top: -10px;
}
.inbox__mark button {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 4px 10px;
  border-radius: 4px;
  margin-left: 15px;
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
