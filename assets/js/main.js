let boxApp = new Vue({
  el: '#box_app',
  data: {
    activeIndex: 0,
    newMessage: '',
    search:'',
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  methods: {
    getIndex: function(index){
      console.log(index);
      this.activeIndex = index;
    },
    printMessage: function(){


      const messagePrint = {
        date: this.getCurrentDate(),
        text: this.newMessage,
        status: 'sent'
      };
      console.log(messagePrint);
      this.contacts[this.activeIndex].messages.push(messagePrint);
      this.newMessage = '';
      setTimeout(function () {
        const now = boxApp.getCurrentDate()
        const messagePrint = {
          date: now,
          text: 'ok',
          status: 'received'
        };
        boxApp.contacts[boxApp.activeIndex].messages.push(messagePrint);
        boxApp.contacts[boxApp.activeIndex].lastLog = now;

      }, 1000);
    },
    searchUser: function(){
      this.contacts.forEach(e => {
        const search = this.search.toLowerCase();
        const name = e.name.toLowerCase();

        if (name.includes(search)) {
          e.visible = true;
        }else{
          e.visible = false;
        }
      });
    },
    // getLastLog: function(){
    //
    // }
    getCurrentDate: function(){

      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      return `${day}/${month + 1}/${year} ${hours}:${minutes}:${seconds}`;
    },
  },
  created() {

  },
  mounted(){

  },
})




boxApp.contacts.forEach(e =>{
  const messages = e.messeges
  function getLastLog(messages){
    let filtered = messages.filter(e =>{
      if (e.status == 'received') {
        return e;
      }
    });
    const lastUserLog = filtered[filtered.length - 1].date;
    console.log(lastUserLog);
    e.lastLog = lastUserLog;
  }
});
