let boxApp = new Vue({
  el: '#box_app',
  data: {
    activeIndex: 0,
    newMessage: '',
    search:'',
    recActive: false,
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent',
            deleteShow: false
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
            deleteShow: false
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received',
            deleteShow: false
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
            status: 'sent',
            deleteShow: false
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            deleteShow: false
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            deleteShow: false
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
            status: 'received',
            deleteShow: false
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            deleteShow: false
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            deleteShow: false
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
            status: 'sent',
            deleteShow: false
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
            deleteShow: false
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
            status: 'sent',
            deleteShow: false
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
            deleteShow: false
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
        text: this.newMessage,
        status: 'sent',
        deleteShow: false
      };
      console.log(messagePrint);
      this.contacts[this.activeIndex].messages.push(messagePrint);
      this.newMessage = '';
      setTimeout(function () {
        const messagePrint = {
          text: 'ok',
          status: 'received',
        };
        boxApp.contacts[boxApp.activeIndex].messages.push(messagePrint);

      }, 1000);
    },

  },
  beforeCreate() {
    setTimeout(function () {

      boxApp.contacts.forEach(e=>{
        const filtered = [];
        e.messages.forEach(e =>{
          if (e.status == 'received') {
            filtered.push(e);
          }
        });
        console.log(filtered);
        const lastLogTemp = filtered[filtered.length-1].date;
        console.log(lastLogTemp);
        e.lastLog = lastLogTemp;
      });
    }, 1);

  },
  mounted(){

  },
})
